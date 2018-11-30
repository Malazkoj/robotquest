module.exports =
    {turn, move, updateBoard, checkIfFlagReached, cloneRobot};

const SYMBOLS = {
    robot: setReverse('R'),
    tree: colorInGreen('T'),
    flag: colorInYellow('F'),
    water: setBlueBg('w')

}
module.exports.SYMBOLS = SYMBOLS;

const trailIndicators = {
    left: setBright('←'),
    right: setBright('→'),
    up: setBright('↑'),
    down: setBright('↓')
};

//Here we try to print the board including the robot
function printCurrentPosition(robot, maxLineIndex, maxColumnIndex) {

    for (let i = 0; i < maxLineIndex; i++) {
        for (let j = 0; j < maxColumnIndex; j++) {
            if (i === robot.position.line && j === robot.position.column) {
                console.log(SYMBOLS.robot);
            }
            else if (i === maxLineIndex && j == maxColumnIndex) {
                console.log(SYMBOLS.flag);
            }
            else {
                console.log('--');
            }
        }
    }
}

//Here we test
function turn(robot, step, turns) {
    console.log(step);
    console.log(robot.head);
    turns += 1;
    //
    switch (step.trim()) {
        case 'right':
            switch (robot.head) {
                case 'up':
                    robot.head = 'right';
                    break;
                case 'right':
                    robot.head = 'down';
                    break;
                case 'down':
                    robot.head = 'left';
                    break;
                case 'left':
                    robot.head = 'up';
                    break;
            }
            console.log('Im inside the case' + robot.head);
            break;
        case 'turn-left':
            switch (robot.head) {
                case 'left':
                    robot.head = 'down';
                    break;
                case 'down':
                    robot.head = 'right';
                    break;
                case 'right':
                    robot.head = 'up';
                    break;
                case 'up':
                    robot.head = 'left';
                    break;
            }
            console.log('im inside the case left');
            break;


    }
    console.log(robot.head);
    return turns;
}

function move(robot, maxLineIndex, maxColumnIndex, nbOfMoves) {
    printCurrentPosition(robot,maxLineIndex,maxColumnIndex);
    switch (robot.head) {
        case 'up':
            if (robot.position.line < maxLineIndex)
                robot.position.line = robot.position.line + 1;
            else return nbOfMoves;
            break;
        case 'down':
            if (robot.position.line > 0)
                robot.position.line = robot.position.line - 1;
            else return nbOfMoves;
            break;
        case 'right':
            if (robot.position.column < maxColumnIndex)
                robot.position.column = robot.position.column + 1;
            else return nbOfMoves;
            break;
        case 'left':
            if (robot.position.line > 0)
                robot.position.column = robot.position.column - 1;
            else return nbOfMoves;
            break;
    }

    nbOfMoves += 1;
    return nbOfMoves;
}

function updateBoard(board, previousRobotState, currentRobotState) {
    return;
}

function checkIfFlagReached(robot, board) {
    return false;
}

// utils
function cloneRobot(robot) {
    let newRobot = {};
    newRobot.position = {};
    newRobot.position.line = robot.position.line;
    newRobot.position.column = robot.position.column;
    newRobot.head = robot.head;
    return newRobot;
}


// presentation utils
function colorInGreen(char) {
    return `\x1b[32m${char}\x1b[0m`;
}

function colorInYellow(char) {
    return `\x1b[33m${char}\x1b[0m`;
}

function setBlueBg(char) {
    return `\x1b[44m${char}\x1b[0m`;
}

function setReverse(char) {
    return `\x1b[7m${char}\x1b[0m`;
}

function setBright(char) {
    return `\x1b[1m${char}\x1b[0m`;
}
