const currentState = [1, 0, 0]
const transitionMatrix = [[0, 1, 0], [0.5, 0, 0.5], [0, 1, 0]];
const nextState = [];

function multiplyMatrix(currentState, transitionMatrix) {

    for (let i = 0; i < currentState.length; i++) {
        let sum = 0;
        for (let j = 0; j < transitionMatrix[i].length; j++) {
            sum += currentState[j] * transitionMatrix[j][i];
        }
        nextState.push(sum);
        sum = 0;
    }
}
multiplyMatrix(currentState, transitionMatrix);
console.log(nextState);