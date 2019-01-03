'use strict';
import { turn, move } from './robotquest-features.js';


const maxLineIndex=4, maxColumnIndex=4;
let nbOfMoves=0;
function main() {
    let robot ={
        position :{
            line:3,
            column:0
        },
        head:'up'
    };

    console.log("Starting now!");

    // attach events to your elements/buttons
    document.getElementById("turn-left-button").addEventListener("click", turn_left);
    document.getElementById("turn-right-button").addEventListener("click",turn_right);
    document.getElementById("move-button").addEventListener("click",function() {move_robot(robot);},false);
    // Initialize your global variables (robot, nbOfMoves, etc...)

}

function move_robot( robot) {
    console.log("Move the robot");
    // call the move function from robotquest-features (already imported 4U)
    move(robot, maxLineIndex, maxColumnIndex, nbOfMoves);
    console.log(robot.position);
    console.log(robot.head);
    console.log(nbOfMoves);
}

function turn_left() {
    console.log("Turn left");
    // you can call this function directly from robotquest-features.js (see import at top of file):
    //turn(robot, 'turn-left', turns);
    //document.getElementById("robot_td").innerText="<-R";
    fill_td_with_data(document.getElementById(robot.position.line+"-"+robot.position.column),0,0);
}


function turn_right() {
    console.log("Turn right");
    // you can call this function directly from robotquest-features.js (see import at top of file):
    //turn(robot, 'turn-right', turns);
}

function moveButtonPress(robot) {
    console.log("move");
}

function fill_td_with_data( tdElement,rowNumber,columnNumber) {
//let myTDElement =new HTMLElement();
//myTDElement=tdElement;
//tdElement=(tdElement as HTMLElement);
console.log(tdElement.innerText);
    tdElement.innerText="yo";
    console.log(tdElement.innerText);
}
// Calling main on load
window.onload = main;
