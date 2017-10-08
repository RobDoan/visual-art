/* SystemJS module definition */

declare var module: NodeModule;

interface NodeModule {
  id: string;
}

declare namespace THREEx {
  class ArToolkitSource {
    constructor(params: ArToolkitSourceParam)

    ready: boolean;
    domElement: Element;

    init(onReady: () => any, onError?: () => any): ArToolkitSource;

    onResize(...args: any[]): any;

    onResizeElement(...args: any[]): any;

    copySizeTo(...args: any[]): void;

    copyElementSizeTo(otherElement: HTMLCanvasElement): void;
  }

  class ArToolkitContext {
    public static baseURL: string;

    constructor(params: ArToolkitContextParam);

    arController: ARController;

    init(onCompleted: () => any): void;

    update(srcElement: any): boolean;


    getProjectionMatrix(srcElement?: any): THREE.Matrix4;
  }

  class ARController {
    constructor(width: number, height: number, camera: any);

    canvas: HTMLCanvasElement;
  }

  class ArMarkerControls {
    constructor(context: any, object3d: any, parameters: ArMarkerControlsParam);
  }

  class ArSmoothedControls {
    constructor(object3d: any, parameters: ArSmoothedControlsParam);

    update(targetObject3d: any);
  }

  interface ArToolkitSourceParam {
    sourceType: string;
    sourceUrl?: string;
    sourceWidth?: number;
    sourceHeight?: number;
    displayWidth?: number;
    displayHeight?: number;
  }

  interface ArToolkitContextParam {
    trackingBackend?: 'artoolkit' | 'aruco' | 'tango';
    debug?: boolean;
    detectionMode?: 'color' | 'color_and_matrix' | 'mono' | 'mono_and_matrix';
    matrixCodeType?: '3x3' | '3x3_HAMMING63' | '3x3_PARITY65' | '4x4' | '4x4_BCH_13_9_3' | '4x4_BCH_13_5_5';
    cameraParametersUrl: string;
    maxDetectionRate?: number;

    canvasWidth?: number;
    canvasHeight?: number;

    imageSmoothingEnabled?: boolean;
  }

  interface ArMarkerControlsParam {
    size?: number;
    type?: 'pattern' | 'barcode' | 'unknown';
    patternUrl?: string | null;
    barcodeValue?: string | null;
    changeMatrixMode?: 'modelViewMatrix' | 'cameraTransformMatrix';
    minConfidence?: number;
  }

  interface ArSmoothedControlsParam {
    lerpPosition?: number;
    lerpQuaternion?: number;
    lerpScale?: number;
    lerpStepDelay?: number;
    minVisibleDelay?: number;
    minUnvisibleDelay?: number;
  }
}
