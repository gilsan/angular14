import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { I072404, I072401 } from "../gangwon.models";
import { UploadService } from "../upload.service";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  isActive: boolean;
  uploadfileList: string[] = [];
  tablename: string = '';
  restorant: I072404[] = [];
  foreignResotrant: I072401[] =[];
     //array varibales to store csv data
  lines: any[] = []; //for headings
  linesR: any[] = []; // for rows
  @ViewChild('uploadfile') uploadfile: ElementRef;

  constructor(
    public service: UploadService
  ) {}

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
        this.tablename = splitnames[2]+splitnames[3]+splitnames[4];

        this.uploadfileList.push(filename);

        this.readCSVfile(file);
        // this.csvAnalyze(file);
      }

    }

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
    const scenarios: any[] = [];
    this.parse_tsv(file, (row: any) => {
      rowCount++;
      if (rowCount >= 0) {
        scenarios.push(row);
      }
    });

    return scenarios;
  }

  csvAnalyze(file: File): void {

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const lists = [];
      const data = this.loadData(reader.result!);
      data.forEach((items, index)=> {

      })
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
          let headers = allTextLines[0].split(',');
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
          for(let i = 0; i < arrl; i++){
            if (allTextLines[i].length) {
              rows.push(allTextLines[i].split(','));
            }

          }
          console.log(this.tablename);
          for (let j = 1; j < arrl; j++) {
              if (rows[j] !== undefined) {
                const items = rows[j];

                /*

                console.log('id: ',this.removeQuote(items[0]));
                console.log('serviceName : ',this.removeQuote(items[1])); //개방서비스명',
                console.log('serviceID :', this.removeQuote(items[2])); //개방서비스아이디',
                console.log('code :', this.removeQuote(items[3])); //개방자치단체코드',
                console.log('manageID :', this.removeQuote(items[4])); //관리번호',
                console.log('startDate :', this.removeQuote(items[5])); //인허가일자',
                console.log('permissionCancelDate :', this.removeQuote(items[6])); //인허가취소일자');
                console.log('businessState :', this.removeQuote(items[7])); //영업상태구분코드',
                console.log('businessStateName :', this.removeQuote(items[8])); //영업상태명',
                console.log('businessCode :', this.removeQuote(items[9])); //상세영업상태코드',
                console.log('businessDetailState : ',this.removeQuote(items[10])); //상세영업상태명',
                console.log('cancelDate : ',this.removeQuote(items[11])); //폐업일자',
                console.log('offStartDate : ',this.removeQuote(items[12])); //휴업시작일자',
                console.log('offEndDate : ',this.removeQuote(items[13])); //휴업종료일자',
                console.log('reopenDate :', this.removeQuote(items[14])); //재개업일자',
                console.log('telNumber :', this.removeQuote(items[15])); //소재지전화',
                console.log('square : ',this.removeQuote(items[16])); //소재지면적',
                console.log('zipCode : ',this.removeQuote(items[17]));//소재지우편번호',
                console.log('oldAddress : ',this.removeQuote(items[18])); //소재지전체주소',
                console.log('roadAddress :', this.removeQuote(items[19])); //도로명전체주소',
                console.log('roadZipcode :', this.removeQuote(items[20])); //도로명우편번호',
                console.log('businessName :', this.removeQuote(items[21])); //사업장명',
                console.log('lastUpdateDate :', this.removeQuote(items[22]),);//최종수정시점',
                console.log('updateType :', this.removeQuote(items[23])); //데이터갱신구분',
                console.log('updateDate :', this.removeQuote(items[24])); //데이터갱신일자',
                console.log('type :', this.removeQuote(items[25])); //업태구분명',
                console.log('latitue :', this.removeQuote(items[26])); //좌표정보(x)',
                console.log('longitude :', this.removeQuote(items[27])); //좌표정보(y)',
                console.log('treatName :', this.removeQuote(items[28])); //위생업태명',
                console.log('serviceMan : ',this.removeQuote(items[29])); //남성종사자수',
                console.log('serviceWomen : ',this.removeQuote(items[30])); //여성종사자수',
                console.log('businessAreaType :', this.removeQuote(items[31])); //영업장주변구분명',
                console.log('levelType : ',this.removeQuote(items[32])); //등급구분명',
                console.log('waterSupplyType : ',this.removeQuote(items[33])); //급수시설구분명',
                console.log('totalServiceNumber : ',this.removeQuote(items[34])); //총직원수',
                console.log('totalMainServiceNumber :', this.removeQuote(items[35])); //본사직원수',
                console.log('factoryOfficeNumber : ',this.removeQuote(items[36])); //공장사무직직원수',
                console.log('factorySalesNumber :', this.removeQuote(items[37])); //공장판매직직원수',
                console.log('factoryWorkerNumber :', this.removeQuote(items[38])); //공장생산직직원수',
                console.log('builderOwer : ',this.removeQuote(items[39])); //건물소유구분명',
                console.log('guaranteeMoney :', this.removeQuote(items[40])); //보증액',
                console.log('monthRate : ',this.removeQuote(items[41])); //월세액',
                console.log('multiuseBusiness :', this.removeQuote(items[42])); //다중이용업소여부',
                console.log('totalAreaAmount : ',this.removeQuote(items[43])); //시설총규모',
                console.log('traditionalAssiged :', this.removeQuote(items[44])); //전통업소지정번호',
                console.log('traditionalMainDish :', this.removeQuote(items[45])); //전통업소주된음식',
                console.log('homePage :', this.removeQuote(items[46])); //홈페이지'
                */

                if(this.tablename === '072404' || this.tablename === '072405') {
                  this.restorant.push({
                    id: this.removeQuote(items[0]),
                    serviceName : this.removeQuote(items[1]), //개방서비스명',
                    serviceID : this.removeQuote(items[2]), //개방서비스아이디',
                    code : this.removeQuote(items[3]), //개방자치단체코드',
                    manageID : this.removeQuote(items[4]), //관리번호',
                    startDate : this.removeQuote(items[5]), //인허가일자',
                    permissionCancelDate : this.removeQuote(items[6]), //인허가취소일자',
                    businessState : this.removeQuote(items[7]), //영업상태구분코드',
                    businessStateName : this.removeQuote(items[8]), //영업상태명',
                    businessCode : this.removeQuote(items[9]), //상세영업상태코드',
                    businessDetailState : this.removeQuote(items[10]), //상세영업상태명',
                    cancelDate : this.removeQuote(items[11]), //폐업일자',
                    offStartDate : this.removeQuote(items[12]), //휴업시작일자',
                    offEndDate : this.removeQuote(items[13]), //휴업종료일자',
                    reopenDate : this.removeQuote(items[14]), //재개업일자',
                    telNumber : this.removeQuote(items[15]), //소재지전화',
                    square : this.removeQuote(items[16]), //소재지면적',
                    zipCode : this.removeQuote(items[17]),//소재지우편번호',
                    oldAddress : this.removeQuote(items[18]), //소재지전체주소',
                    roadAddress : this.removeQuote(items[19]), //도로명전체주소',
                    roadZipcode : this.removeQuote(items[20]), //도로명우편번호',
                    businessName : this.removeQuote(items[21]), //사업장명',
                    lastUpdateDate : this.removeQuote(items[22]), //최종수정시점',
                    updateType : this.removeQuote(items[23]), //데이터갱신구분',
                    updateDate : this.removeQuote(items[24]), //데이터갱신일자',
                    type : this.removeQuote(items[25]), //업태구분명',
                    latitue : this.removeQuote(items[26]), //좌표정보(x)',
                    longitude : this.removeQuote(items[27]), //좌표정보(y)',
                    treatName : this.removeQuote(items[28]), //위생업태명',
                    serviceMan : this.removeQuote(items[29]), //남성종사자수',
                    serviceWomen : this.removeQuote(items[30]), //여성종사자수',
                    businessAreaType : this.removeQuote(items[31]), //영업장주변구분명',
                    levelType : this.removeQuote(items[32]), //등급구분명',
                    waterSupplyType : this.removeQuote(items[33]), //급수시설구분명',
                    totalServiceNumber : this.removeQuote(items[34]), //총직원수',
                    totalMainServiceNumber : this.removeQuote(items[35]), //본사직원수',
                    factoryOfficeNumber : this.removeQuote(items[36]), //공장사무직직원수',
                    factorySalesNumber : this.removeQuote(items[37]), //공장판매직직원수',
                    factoryWorkerNumber : this.removeQuote(items[38]), //공장생산직직원수',
                    builderOwer : this.removeQuote(items[39]), //건물소유구분명',
                    guaranteeMoney : this.removeQuote(items[40]), //보증액',
                    monthRate : this.removeQuote(items[41]), //월세액',
                    multiuseBusiness : this.removeQuote(items[42]), //다중이용업소여부',
                    totalAreaAmount : this.removeQuote(items[43]), //시설총규모',
                    traditionalAssiged : this.removeQuote(items[44]), //전통업소지정번호',
                    traditionalMainDish : this.removeQuote(items[45]), //전통업소주된음식',
                    homePage : this.removeQuote(items[46]), //홈페이지'

                  })

                } else if (this.tablename === '072401' || this.tablename === '072402' || this.tablename ==='072403') {


                    this.foreignResotrant.push({
                      id: this.removeQuote(items[0]),
                      serviceName : this.removeQuote(items[1]), //개방서비스명',
                      serviceID : this.removeQuote(items[2]), //개방서비스아이디',
                      code : this.removeQuote(items[3]), //개방자치단체코드',
                      manageID : this.removeQuote(items[4]), //관리번호',
                      startDate : this.removeQuote(items[5]), //인허가일자',
                      permissionCancelDate : this.removeQuote(items[6]), //인허가취소일자',
                      businessState : this.removeQuote(items[7]), //영업상태구분코드',
                      businessStateName : this.removeQuote(items[8]), //영업상태명',
                      businessCode : this.removeQuote(items[9]), //상세영업상태코드',
                      businessDetailState : this.removeQuote(items[10]), //상세영업상태명',
                      cancelDate : this.removeQuote(items[11]), //폐업일자',
                      offStartDate : this.removeQuote(items[12]), //휴업시작일자',
                      offEndDate : this.removeQuote(items[13]), //휴업종료일자',
                      reopenDate : this.removeQuote(items[14]), //재개업일자',
                      telNumber : this.removeQuote(items[15]), //소재지전화',
                      square : this.removeQuote(items[16]), //소재지면적',
                      zipCode : this.removeQuote(items[17]),//소재지우편번호',
                      oldAddress : this.removeQuote(items[18]), //소재지전체주소',
                      roadAddress : this.removeQuote(items[19]), //도로명전체주소',
                      roadZipcode : this.removeQuote(items[20]), //도로명우편번호',
                      businessName : this.removeQuote(items[21]), //사업장명',
                      lastUpdateDate : this.removeQuote(items[22]), //최종수정시점',
                      updateType : this.removeQuote(items[23]), //데이터갱신구분',
                      updateDate : this.removeQuote(items[24]), //데이터갱신일자',
                      type : this.removeQuote(items[25]), //업태구분명',
                      latitue : this.removeQuote(items[26]), //좌표정보(x)',
                      longitude : this.removeQuote(items[27]), //좌표정보(y)',
                      upjongName : this.removeQuote(items[28]), //문화체육업종명',
                      saupja : this.removeQuote(items[29]), //문화사업자구분명',
                      areaType : this.removeQuote(items[30]), //지역구분명',
                      totalStair : this.removeQuote(items[31]), //총층수',
                      enviromnent : this.removeQuote(items[32]), //'주변환경명',
                      itemList : this.removeQuote(items[33]), //'제작취급품목내용',
                      insuranceName : this.removeQuote(items[34]), //보험기관명',
                      buildingUsed : this.removeQuote(items[35]), //건물용도명',
                      groundStair : this.removeQuote(items[36]), //지상층수',
                      undergroundStair : this.removeQuote(items[37]), //지하층수',
                      bedrommNumber : this.removeQuote(items[38]), //객실수',
                      totalArea : this.removeQuote(items[39]), //건축연면적',
                      englishName : this.removeQuote(items[40]), //영문상호명',
                      englishAddress : this.removeQuote(items[41]), //영문상호주소',
                      totalShipWeight : this.removeQuote(items[42]), //선박총톤수',
                      shipNumber : this.removeQuote(items[43]), //선박척수',
                      shipJewon : this.removeQuote(items[44]), //선박제원',
                      stageArea : this.removeQuote(items[45]), //무대면적',
                      attendantChairNumber : this.removeQuote(items[46]), //좌석수',
                      souvenirNumber : this.removeQuote(items[47]), //기념품종류',
                      conferenceNumber : this.removeQuote(items[48]), //회의실별동시수용인원',
                      totalRidesArea : this.removeQuote(items[49]), //시설면적',
                      ridesList : this.removeQuote(items[50]), //놀이기구수내역',
                      ridesNumber : this.removeQuote(items[51]), //놀이시설수',
                      broadcastExist : this.removeQuote(items[52]), //방송시설유무',
                      generateorExist : this.removeQuote(items[53]), //발전시설유무',
                      firstaddExist : this.removeQuote(items[54]), //의무실유무',
                      informationExist : this.removeQuote(items[55]), //안내소유무',
                      startInsuranceDate : this.removeQuote(items[56]), //기획여행보험시작일자',
                      endInsuranceDate : this.removeQuote(items[57]), //기획여행보험종료일자',
                      capital : this.removeQuote(items[58]), //자본금',
                      insuracneStart : this.removeQuote(items[59]), //보험시작일자',
                      insuracneEnd : this.removeQuote(items[60]), //보험시작일자',
                      otherRides : this.removeQuote(items[61]), //부대시설내역',
                      ridesArea : this.removeQuote(items[62]) //시설규모',
                    });
                }

                tarrR.push(rows[j]);
              }
          }

          if (this.tablename === '072404' || this.tablename === '072405') {
                console.log(this.restorant);
                this.service.uploadRestorant(this.restorant, this.tablename).subscribe(() => {
                  console.log('국내용 ....!!!!!!! ');
                  this.restorant = [];
                  alert('디비를 만들었습니다.');
                });
          } else if (this.tablename === '072401' || this.tablename === '072402' || this.tablename === '072403') {
              console.log(this.foreignResotrant);
              this.service.uploadForeignRestorant(this.foreignResotrant, this.tablename).subscribe(() => {
                console.log('.... 국외용');
                this.foreignResotrant = [];
                alert('디비를 만들었습니다.');
              });
          }

         //Push rows to array variable
          this.linesR.push(tarrR);
      }
  }

  removeQuote(value: string) {
    if (value === undefined) return;
    const quot_check = value.indexOf('"');
    if (quot_check !== -1) {
        return value.replace(/"/g, "");
    }
    return value;
  }


}
