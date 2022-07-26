import { ThreeScene } from './scene';
import { FragmentLoader } from "bim-fragment/fragment-loader";

const threeScene = new ThreeScene();
const loader = new FragmentLoader();

for(let i = 0; i < 5; i++) {
    const geometryURL = `./model/${i}.glb`;
    const dataURL = `./model/${i}.json`;
    const fragment = await loader.load(geometryURL, dataURL);
    threeScene.scene.add(fragment.mesh);
}
