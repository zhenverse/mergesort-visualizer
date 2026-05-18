import { generateRandomArray } from './be/dataGen.js';
import { getMergeSortSteps } from './be/mergeSort.js';
import { renderArray } from './fe/render.js';
import { playAnimation } from './fe/animator.js';

// Application State
let currentArray = [];
let isSorting = false;

// window.app.generateArray()
function generateArray() {
    if (isSorting) return;
    try {
        currentArray = generateRandomArray(32, 5, 250);
        renderArray(currentArray);
    } catch (error) {
        console.error("Array generation failed:", error.message);
        throw error; // try-catch
    }
}

//  window.app.startSort(callback)
async function startSort(onComplete) {
    if (isSorting || currentArray.length === 0) return;
    isSorting = true;
    try {
        const sortingSteps = getMergeSortSteps(currentArray);
        await playAnimation(sortingSteps);
    } catch (error) {
        console.error("Sorting workflow encountered an error:", error);
    } finally {
        isSorting = false;
        if (typeof onComplete === 'function') {
            onComplete();
        }
    }
}

// window.app
window.app = {
    generateArray,
    startSort
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    generateArray();
});