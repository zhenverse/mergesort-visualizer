# Developer Guide

## Team Roster
- **Project Manager (PM)**: 陳冠宇
- **Frontend (FE)**: 曾冠齊 (FE1), 李侑融 (FE2), 林蔡允淮 (FE3)
- **Backend (BE)**: 何崇希 (BE1), 林業承 (BE2)
- **Quality Assurance (QA)**: 林奕辰

## Project Structure
```
css/                           Frontend styling directory
  layout.css                   Overall page layout and container positioning
  variables.css                Global CSS variables (colors, dimensions, speeds)
  visualizer.css               Specific styles for sorting bars and visual states
docs/                          Project management and specification documents
  README.md                    Documentation index and task allocation details
  api_spec.md                  Data contract and step formats between FE and BE
js/                            JavaScript source code
  main.js                      Application controller coordinating FE and BE modules
  be/                          Pure domain logic and algorithms (Backend)
    dataGen.js                 Random array generation and data state management
    mergeSort.js               Merge sort algorithm and operation step recorder
  fe/                          View logic and DOM manipulation (Frontend)
    animator.js                Animation timeline control and step playback
    controls.js                UI event listeners (buttons, sliders)
    render.js                  DOM painting and visual bar updates
index.html                     Main HTML entry point and UI skeleton
LICENSE                        Open source license definition
README.md                      Main project documentation
```

## Project Task Allocation
*Goal: Build a working visualizer that can generate an array, sort it, and display the animation.*

### Crucial: API Specification (FE & BE Data Contract)
Before writing any code, all FE and BE developers must read `docs/api_spec.md`. This document defines the exact JSON format used to communicate sorting steps.
- Backend: You must output your sorting steps strictly matching this format.
- Frontend: You will use the mock data in this document to build and test your animations before the Backend logic is fully implemented.

### Frontend (FE) Tasks
*   **FE1 - UI & Layout**
    *   **Files**: `index.html`, `css/layout.css`, `js/fe/controls.js`
    *   **Tasks**: Build the webpage layout. Create the "Generate Array" and "Start Sorting" buttons. Make sure button clicks work correctly.
*   **FE2 - Visual Rendering**
    *   **Files**: `css/visualizer.css`, `js/fe/render.js`
    *   **Tasks**: Write the code to turn numbers into visual bars (DOM elements). Set up CSS colors for different states (e.g., Default, Comparing, Sorted).
*   **FE3 - Animation Controller**
    *   **Files**: `js/fe/animator.js`
    *   **Tasks**: Take the sorting steps provided by the Backend (formatted exactly as defined in `docs/api_spec.md`) and play them as an animation using `setInterval` or `setTimeout`.

### Backend (BE) Tasks
*   **BE1 - Data Generation**
    *   **Files**: `js/be/dataGen.js`
    *   **Tasks**: Write a function to generate an array of random numbers. Handle basic edge cases (e.g., array size limits).
*   **BE2 - Core Algorithm**
    *   **Files**: `js/be/mergeSort.js`
    *   **Tasks**: Implement the Merge Sort algorithm. Instead of just returning the final sorted array, record every "split" and "merge" step into the strict JSON format defined in `docs/api_spec.md` for the Frontend to animate.

### Quality Assurance (QA) Tasks
*   **QA - Testing & Code Review**
    *   **Tasks**: Review pull requests on GitHub. Test the application with extreme cases (e.g., clicking buttons fast) and report bugs using GitHub Issues.

### Project Manager (PM) Tasks
*   **PM - Integration & Management**
    *   **Files**: `js/main.js`, `README.md`, `docs/*`
    *   **Tasks**: Connect the Frontend and Backend inside `main.js`. Track weekly progress, define the API data format between BE and FE, and write the final project documentation.

## GitHub Workflow Guide (How We Code Together)
To prevent code conflicts and keep our `main` branch stable, everyone MUST follow this standard GitHub Flow. **Never push directly to the `main` branch.**

### Step 1: Sync Your Local Repo
Before starting any new task, make sure your local `main` branch is up-to-date with the remote repository.
```bash
git checkout main
git pull origin main
```

### Step 2: Create a Feature Branch
Always create a new branch for your specific task. Use clear prefixes like `feat/` (for new features), `fix/` (for bugs), or `docs/` (for documentation).
```bash
git checkout -b feat/add-random-button
```
This command creates the branch and switches to it immediately.

### Step 3: Make Changes and Commit
Write your code, save, and make atomic commits (one logical change per commit). Write clear commit messages so that others know what you did.
```bash
git add .
git commit -m "feat: create random array generation button"
```

### Step 4: Push Your Branch
Push your newly created branch to the remote GitHub repository.
```bash
git push origin feat/add-random-button
```

### Step 5: Open a Pull Request (PR)
1. Go to our repository page on GitHub.
2. You will see a green button saying **"Compare & pull request"**. Click it.
3. Write a brief description of what you changed or fixed.
4. Add reviewers (e.g., QA or another Frontend/Backend member) on the right sidebar.

## Step 6: Code Review & Testing
* **Reviewers**: Check the code. If everything is fine, approve it. If not, request changes.
* **QA**: Pull the branch locally to test it and ensure it doesn't break the application.

## Step 7: Merge and Clean Up
Once approved, the reviewer or PM will click **"Merge pull request"**. After it is merged successfully, the remote branch can be deleted.
Finally, update your local machine and delete the local branch:
```bash
git checkout main
git pull origin main
git branch -d feat/add-random-button
```