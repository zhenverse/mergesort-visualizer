import { 
    setComparing, 
    overwriteBar, 
    setDefault, 
    setSorted, 
    getBarsLength 
} from './render.js';

const DELAY_MS = 67;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function playAnimation(steps) {
    for (let step of steps) {
        if (step.type === "compare") {
            setDefault();
            setComparing(step.indices[0], step.indices[1]);
            await sleep(DELAY_MS);
        } 
        else if (step.type === "overwrite") {
            overwriteBar(step.index, step.value);
            await sleep(DELAY_MS);
        } 
        else if (step.type === "complete") {
            setDefault();
            const totalBars = getBarsLength();
            for (let i = 0; i < totalBars; i++) {
                setSorted(i);
                await sleep(15); 
            }
        }
    }
}