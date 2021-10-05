// npx -p typescript tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir node_modules/@types/openglobus__og
// cp index.d.ts node_modules/@types/openglobus__og
//
import { Globe } from "./Globe";
import { Vector } from "./layer/Vector";
import { XYZ } from "./layer/XYZ";
import { LonLat, GlobusTerrain } from "./void";

export namespace layer {
    export { XYZ, Vector };
}

export namespace terrain {
    export { GlobusTerrain };
}

export { Globe, LonLat };
