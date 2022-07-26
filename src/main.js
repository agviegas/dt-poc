import { ThreeScene } from './scene';
import {unzip} from 'unzipit';
import { FragmentLoader } from "bim-fragment/fragment-loader";

init();

async function init() {
    const threeScene = new ThreeScene();
    const loader = new FragmentLoader();

    const {entries} = await unzip('model/model.zip');

    const fileNames = Object.keys(entries);
    for(let i = 0; i <= fileNames.length - 5; i+= 2) {
        const geometryName = fileNames[i];
        const geometry = await entries[geometryName].blob();
        const geometryURL = URL.createObjectURL(geometry);

        const dataName = fileNames[i + 1];
        const data = await entries[dataName].blob();
        const dataURL = URL.createObjectURL(data);

        const fragment = await loader.load(geometryURL, dataURL);
        threeScene.scene.add(fragment.mesh);
    }
}
