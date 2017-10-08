import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable()
export class ArToolkitService {

  constructor() {
    THREEx.ArToolkitContext.baseURL = 'https://jeromeetienne.github.io/AR.js/';
  }

  /**
   * Build ArToolkit form Threejs to detect hero pattern.
   * @param {THREEx.ArToolkitSourceParam} sourceParam
   * @param {HTMLCanvasElement} canvasElement
   * @param {THREE.Camera} camera
   */
  buildArToolkit(sourceParam: THREEx.ArToolkitSourceParam,
                 canvasElement: HTMLCanvasElement,
                 camera: THREE.Camera): ArToolKitElements {

    // create WebGLRender with output to canvasElement
    const renderer = this.createRenderer(canvasElement);

    const arToolKitSource = this.createArToolKitSource(sourceParam, renderer);

    const arToolKitContext = this.createARToolkitContext(camera);

    const onResizeHandler = () => {
      arToolKitSource.onResize()
      arToolKitSource.copySizeTo(renderer.domElement)
      if (arToolKitContext.arController !== null) {
        arToolKitSource.copySizeTo(arToolKitContext.arController.canvas);
      }
      arToolKitSource.onResizeElement(renderer.domElement);
    }
    arToolKitSource.init(onResizeHandler);
    window.addEventListener('resize', onResizeHandler);

    arToolKitContext.init(() => {
      camera.projectionMatrix.copy(arToolKitContext.getProjectionMatrix());
    })

    return { renderer, arToolKitSource, arToolKitContext };
  }

  createArToolKitMarker(arToolkitContext, markerRoot): THREEx.ArMarkerControls {
    return new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
      type: 'pattern', patternUrl: THREEx.ArToolkitContext.baseURL + 'data/data/patt.hiro'
    });
  }

  createSmoothedControls(smoothedRoot: any): THREEx.ArSmoothedControls {
    return new THREEx.ArSmoothedControls(smoothedRoot, {
      lerpPosition: 0.4,
      lerpQuaternion: 0.3,
      lerpScale: 1,
    });
  }

  private createArToolKitSource(sourceParam: THREEx.ArToolkitSourceParam, renderer: THREE.WebGLRenderer): THREEx.ArToolkitSource {
    const arToolKitSource = new THREEx.ArToolkitSource(sourceParam);
    return arToolKitSource;
  }

  /**
   * Create WebGL Render
   * @param {HTMLCanvasElement} canvasElement
   * @returns {THREE.WebGlRenderer}
   */
  private createRenderer(canvasElement: HTMLCanvasElement): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha: true,
      antialias: true
    });
    renderer.setClearColor(new THREE.Color('lightgrey'), 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top      = '0px';
    renderer.domElement.style.left     = '0px';
    document.body.appendChild(renderer.domElement);
    return renderer;
  }

  /**
   * create arToolkitContext
   */
  private createARToolkitContext(camera: THREE.Camera): THREEx.ArToolkitContext {
    const arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: THREEx.ArToolkitContext.baseURL + 'data/data/camera_para.dat',
      detectionMode: 'mono',
      maxDetectionRate: 30,
      canvasWidth: 80 * 3,
      canvasHeight: 60 * 3
    });
    arToolkitContext.init(() => {
      camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    })
    return arToolkitContext;
  }
}

interface ArToolKitElements {
  renderer: THREE.WebGLRenderer;
  arToolKitSource: THREEx.ArToolkitSource;
  arToolKitContext: THREEx.ArToolkitContext;
}
