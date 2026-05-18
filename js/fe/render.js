let bars = [];

//render an array of numbers as visual bars
//input: an array of bar height
//output: an array that contain bars after rendering
export function renderArray(numbers){
    const container = document.getElementById("bar-container");
    if (!container) return [];

    container.innerHTML="";
    bars = [];
    const barWidth=Math.max(8,container.clientWidth/numbers.length);

    for(let number of numbers){
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height=number+"px";
        bar.style.width=barWidth+"px";
        container.appendChild(bar);
        bars.push(bar);
    }


    return bars;
}

export function cleanComparing(){
    for(let bar of bars){
        bar?.classList.remove("comparing");
    }
}

export function setComparing(bar1,bar2){
    cleanComparing();
    bars[bar1]?.classList.add("comparing");//?. safety check
    bars[bar2]?.classList.add("comparing");
}

export function setSorted(bar){
    bars[bar]?.classList.add("sorted");
}

//api_spec part
export function overwriteBar(bar,value){
    bars[bar].style.height = value + "px";
}

export function clearSorted(){
    for(let bar of bars){
        bar?.classList.remove("sorted");
    }
}

export function setDefault(){
    for(let bar of bars){
        bar?.classList.remove("sorted");
        bar?.classList.remove("comparing");
    }
}

export function getBarsLength() {
    return bars.length;
}

// Temporary mock steps based on api_spec
// const mockSteps = [
//     { type: "compare", indices: [0, 1] },
//     { type: "overwrite", index: 1, value: 220 },
//     { type: "compare", indices: [2, 3] },
//     { type: "overwrite", index: 2, value: 40 },
//     { type: "complete" }
// ];


//Play Steps Example

// function playSteps(steps) {

//     let delay = 0;

//     for (let step of steps) {

//         setTimeout(() => {

//             if (step.type === "compare") {

//                 setDefault();

//                 setComparing(step.indices[0], step.indices[1]);
//             }

//             else if (step.type === "overwrite") {

//                 overwriteBar(step.index, step.value);
//             }

//             else if (step.type === "complete") {

//                 setDefault();

//                 for (let i = 0; i < bars.length; i++) {

//                     setSorted(i);
//                 }
//             }

//         }, delay);

//         delay += 800;
//     }
// }


// const testNumbers = [50, 120, 80, 200, 150,50, 120, 80, 200, 150,50, 120, 80, 200, 150,50, 120, 80, 200, 150,50, 120, 80, 200, 150,50, 120, 80, 200, 150];

// renderBars(testNumbers);

// playSteps(mockSteps);