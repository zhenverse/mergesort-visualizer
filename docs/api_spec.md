# API Specification: Frontend & Backend Data Contract

## 1. Core Concept
This project strictly follows a **Unidirectional Data Flow**. The Backend (`mergeSort.js`) must NOT manipulate the DOM directly. Its sole responsibility is to take an unsorted array as input and return an array of "sorting steps" (an Array of Objects). The Frontend (`animator.js`) will then read these steps sequentially to play the visual animation.

## 2. Main Interface
**Function Name**: `getMergeSortSteps(initialArray)`
- **Input**: `[Array of Numbers]` (e.g., `[6, 7, 1, 1, 4, 5, 1, 4]`)
- **Output**: `[Array of Objects]` (See the format details below)

## 3. Step Object Definition
To allow the Frontend to accurately render the dynamic process of Merge Sort, each object in the returned array must contain a `type` (the action type) and its corresponding parameters.

We define three primary action types:

### A. Compare
Triggered when the algorithm compares two numbers.
- **Purpose**: The Frontend receives this and changes the color of the bars at these two indices (e.g., to yellow or red) to show an active comparison.
- **Format**:
```json
{
  "type": "compare",
  "indices": [0, 1] 
}
```

### B. Overwrite (Move)
Triggered when a smaller number is selected and written back into the array.
- **Purpose**: The Frontend receives this, updates the height (value) of the bar at the specific index, and changes its color (e.g., to green) to indicate a movement.
- **Format**:
```json
{
  "type": "overwrite",
  "index": 0,
  "value": 3
}
```

### C. Complete
Triggered when the entire array is fully sorted.
- **Purpose**: The Frontend receives this and plays a completion animation, such as turning all bars blue sequentially.
- **Format**:
```json
{
  "type": "complete"
}
```

## 4. Frontend Mock Data Example
Frontend members can use the following mock data inside `animator.js` to test the animation loop logic before the Backend algorithm is fully implemented:
```javascript
// Assuming the initial array is [8, 7]
const mockSteps = [
  { type: "compare", indices: [0, 1] },      // Compare 8 and 7
  { type: "overwrite", index: 0, value: 7 }, // Overwrite index 0 with 7
  { type: "overwrite", index: 1, value: 8 }, // Overwrite index 1 with 8
  { type: "complete" }                       // Sorting is complete
];
```