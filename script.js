// Mock API functions with different response times
function apiFast() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Fast API resolved (0s)"), 0);
    });
}

function apiMedium() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Medium API resolved (2s)"), 2000);
    });
}

function apiSlow() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Slow API resolved (5s)"), 5000);
    });
}

// Function to display result in the output div
function displayResult(result) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${result}</p>`;
}

// Function to clear previous results
function clearResults() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<strong>Results will be displayed here...</strong>';
}

// Function to demonstrate Promise.all
function runAll() {
    clearResults();
    Promise.all([apiFast(), apiMedium(), apiSlow()])
        .then(results => {
            displayResult("Promise.all resolved with all results:");
            results.forEach(result => displayResult(result));
        })
        .catch(err => displayResult(`Error in Promise.all: ${err}`));
}

// Function to demonstrate Promise.race
function runRace() {
    clearResults();
    Promise.race([apiFast(), apiMedium(), apiSlow()])
        .then(result => {
            displayResult(`Promise.race resolved with: ${result}`);
        })
        .catch(err => displayResult(`Error in Promise.race: ${err}`));
}

// Function to demonstrate Promise.any
function runAny() {
    clearResults();
    Promise.any([apiFast(), apiMedium(), apiSlow()])
        .then(result => {
            displayResult(`Promise.any resolved with: ${result}`);
        })
        .catch(err => displayResult(`Error in Promise.any: ${err}`));
}

