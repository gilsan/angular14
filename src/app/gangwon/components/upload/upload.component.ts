import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  isActive: boolean;
  uploadfileList: string[] = [];
     //array varibales to store csv data
  lines: any[] = []; //for headings
  linesR: any[] = []; // for rows
  @ViewChild('uploadfile') uploadfile: ElementRef;

  ngOnInit(): void {
    this.uploadfileList = [];

  }

  onConfirm() {

    this.uploadfileList = [];
    this.uploadfile.nativeElement.value = '';
  }

  onCancel() {
    this.uploadfileList = [];
    this.uploadfile.nativeElement.value = '';
  }

  disabled(): boolean {
    let status = true;
    if (this.uploadfileList.length) {
      status = false;
    } else {
      status = true;
    }

    return status
  }

  onFileSelect(event: Event): any {
    // console.log(event);
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    //  console.log(files, files.length);

    if (files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < files.length; i++) {
        const filename = files[i].name;
        const file = files[i];

        const splitnames = filename.split('_');
        const tableName = splitnames[2]+splitnames[3]+splitnames[4];
        console.log(tableName);
        this.uploadfileList.push(filename);
        // this.csvFileAnalyze(file);
        this.readCSVfile(file);
      }

    }

  }

  readCSVfile(file: File) {
     //File upload function
         //File reader method
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          allTextLines = csv.split(/\r|\n|\r/);


         //Table Headings
          let headers = allTextLines[0].split(';');
          let data = headers;
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          //Pusd headings to array variable
          this.lines.push(tarr);

          // Table Rows
          let tarrR = [];

          let arrl = allTextLines.length;
          let rows = [];
          for(let i = 1; i < arrl; i++){
          rows.push(allTextLines[i].split(';'));
          }

          for (let j = 0; j < arrl; j++) {
              if (rows[j] !== undefined) {
                const items = rows[j][0].split(',');
                console.log(items);
                tarrR.push(rows[j]);
              }

          }

         //Push rows to array variable
          this.linesR.push(tarrR);
      }


  }

  csvFileAnalyze(file: File) {
    const reader = new FileReader();
    let data: any[] = [];
    reader.onload = (e) => {
      const lists = [];
      data = this.loadData(reader.result!);


      data.forEach(element => {
            console.log(element);

      });

    }

    data = [];
    reader.readAsText(file);
  }


  parse_tsv(s: any, f: any): void {
    s = s.replace(/,/g, ';');
    let ixEnd = 0;
    for (let ix = 0; ix < s.length; ix = ixEnd + 1) {
      ixEnd = s.indexOf('\n', ix);
      if (ixEnd === -1) {
        ixEnd = s.length;
      }
      const row = s.substring(ix, ixEnd).split('\t');
      f(row);
    }
  }


  loadData(file: ArrayBuffer | string) {

    let rowCount = 0;
    const scenarios: any = [];
    this.parse_tsv(file, (row: any) => {
      rowCount++;
      if (rowCount >= 0) {
        scenarios.push(row);
      }
    });

    return scenarios;
  }






}
