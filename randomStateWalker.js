let currentState = [1, 0, 0]
const transitionMatrix = [[0, 1, 0], [0.5, 0, 0.5], [0, 1, 0]];

function multiplyMatrix(currentState, transitionMatrix) {
    let nextState = [];
    for (let i = 0; i < currentState.length; i++) {
        let sum = 0;
        for (let j = 0; j < transitionMatrix[i].length; j++) {
            sum += currentState[j] * transitionMatrix[j][i];
        }
        nextState.push(sum);
        sum = 0;
    }
    return nextState;
}

for (let i = 1; i <= 10; i++) {
    console.log(currentState);
    currentState = multiplyMatrix(currentState, transitionMatrix);
}   