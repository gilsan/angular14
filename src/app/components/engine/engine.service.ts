import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService implements OnDestroy {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private light!: THREE.AmbientLight;

  private cube!: THREE.Mesh;
  private frameId: number| null = null;
  private planegeometry!: THREE.PlaneGeometry;

  private count = 0;
  private clock =  new THREE.Clock();

  public constructor(private ngZone: NgZone) {

  }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
  //  this.renderer.setSize(window.innerWidth, window.innerHeight);
  this.renderer.setSize(400, 300);
    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
    this.scene.add(this.light);

    const texture = new THREE.TextureLoader().load('../../assets/background/26.jpg');
    // const geometry = new THREE.BoxGeometry(1, 1, 1);

    this.planegeometry = new THREE.PlaneGeometry( 19, 10, 15,10 );
    const material = new THREE.MeshBasicMaterial({
     // color: 0x00ff00,
      map: texture
    });
    this.count = this.planegeometry.attributes['position'].count;

    this.cube = new THREE.Mesh( this.planegeometry, material );
    this.scene.add(this.cube);

  }

  animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  render() {

    const time = this.clock.getElapsedTime();
    for (let i =0; i < this.count; i++) {
      const x = this.planegeometry.attributes['position'].getX(i);
      const y = this.planegeometry.attributes['position'].getY(i);
      // animations
      const anim1 =  0.75 * Math.sin(x * 2 + time * 0.7);
      const anim2 =  0.25 * Math.sin(x + time * 0.7);

      this.planegeometry.attributes['position'].setZ(i, anim1 + anim2);
      this.planegeometry.computeVertexNormals();
      this.planegeometry.attributes['position'].needsUpdate = true
    }


    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }
}
