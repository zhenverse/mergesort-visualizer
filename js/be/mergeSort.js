export function getMergeSortSteps(initialArray) {
    const animations = [];
    if (initialArray.length <= 1) return animations;
  
    // Copying the array for actual sorting logics
    const auxiliaryArray = [...initialArray];
    const mainArray = [...initialArray];

    mergeSortHelper(mainArray, 0, mainArray.length - 1, auxiliaryArray, animations);
  
    // C. complete
    animations.push({ "type": "complete" });
  
    return animations;
}
  
function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    
    // Devide
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    
    // Merge and record steps
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}
  
function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
  
    while (i <= middleIdx && j <= endIdx) {
        // A. Compare
        animations.push({
            "type": "compare",
            "indices": [i, j]
        });
  
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // B. Overwrite
        animations.push({
            "type": "overwrite",
            "index": k,
            "value": auxiliaryArray[i]
        });
        mainArray[k++] = auxiliaryArray[i++];
        } else {
        animations.push({
            "type": "overwrite",
            "index": k,
            "value": auxiliaryArray[j]
        });
        mainArray[k++] = auxiliaryArray[j++];
        }
    }
  
    // Processing remaining values
    while (i <= middleIdx) {
        //animations.push({ type: "compare", indices: [i, i] }); //No self-comparison needed
        animations.push({ type: "overwrite", index: k, value: auxiliaryArray[i] });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        //animations.push({ type: "compare", indices: [j, j] });
        animations.push({ type: "overwrite", index: k, value: auxiliaryArray[j] });
        mainArray[k++] = auxiliaryArray[j++];
    }
}