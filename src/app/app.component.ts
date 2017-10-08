import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { ArToolkitService } from './services/ar-toolkit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('camera') cameraCanvas: ElementRef;
                                onRenderFcts: Array<Func> = [];
                                scene: THREE.Scene;
                                camera: THREE.Camera;
                                markerRoot: THREE.Group;
                                smoothedRoot: THREE.Group;

  constructor(private arToolkitService: ArToolkitService) {
    this.scene        = new THREE.Scene();
    this.camera       = new THREE.Camera();
    this.markerRoot   = new THREE.Group;
    this.smoothedRoot = new THREE.Group;
    this.scene.add(this.camera);
    this.scene.add(this.markerRoot);
    this.scene.add(this.smoothedRoot);
  }

  ngAfterViewInit() {
    const { renderer, arToolKitSource, arToolKitContext } = this.arToolkitService.buildArToolkit(
      { sourceType: 'webcam' },
      this.cameraCanvas.nativeElement,
      this.camera);
    this.onRenderFcts.push(() => {
      if (arToolKitSource.ready === false) {
        return;
      }
      arToolKitContext.update(arToolKitSource.domElement);
    });
    const arToolkitMarker  = this.arToolkitService.createArToolKitMarker(arToolKitContext, this.markerRoot);
    const smoothedControls = this.arToolkitService.createSmoothedControls(this.smoothedRoot);

    this.onRenderFcts.push(() => {
      smoothedControls.update(this.markerRoot);
      renderer.render(this.scene, this.camera);
    });
    this.createARObject();
    let lastTimeMsec = null;
    const animate    = (nowMsec) => {
      requestAnimationFrame(animate);
      lastTimeMsec    = lastTimeMsec || nowMsec - 1000 / 60;
      const deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
      lastTimeMsec    = nowMsec;
      this.onRenderFcts.forEach((onRenderFct) => {
        onRenderFct(deltaMsec / 1000, nowMsec / 1000);
      });
    };
    window.requestAnimationFrame(animate);
  }

  createARObject() {
    const geometry      = new THREE.PlaneGeometry(1, 1, 1);
    const texture       = new THREE.TextureLoader().load('assets/Moon_Flower.jpg');
    texture.needsUpdate = true;
    const material      = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide
    });
    const mesh          = new THREE.Mesh(geometry, material);
    mesh.rotation.x     = -Math.PI / 2; // -90°
    mesh.position.y     = geometry.parameters.height / 2;
    this.smoothedRoot.add(mesh);
  }
}

type Func = (...args: any[]) => void;
