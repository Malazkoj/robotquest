'use strict';
import { turn, move } from './robotquest-features.js';


const maxLineIndex=4, maxColumnIndex=4;
let nbOfMoves=0,turns;
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
    document.getElementById("turn-left-button").addEventListener("click",function(){ turn_left(robot);},false);
    document.getElementById("turn-right-button").addEventListener("click",function(){turn_right(robot);},false);
    document.getElementById("move-button").addEventListener("click",function() {move_robot(robot);},false);
    // Initialize your global variables (robot, nbOfMoves, etc...)

}

function move_robot( robot) {
    console.log("Move the robot");
    clear_td_from_data(robot);
    console.log("after call clearfunction "+robot.position.line+"-"+robot.position.column);
    // call the move function from robotquest-features (already imported 4U)
    move(robot, maxLineIndex, maxColumnIndex, nbOfMoves);
    console.log(robot.position.line+"-"+robot.position.column);
    fill_td_with_data(robot,robot.position.line,robot.position.column);
    console.log(robot.position);
    console.log(robot.head);
    console.log(nbOfMoves);
}

function turn_left(robot) {
    console.log("Turn left");
    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-left', turns);
    //document.getElementById("robot_td").innerText="<-R";
    fill_td_with_data(robot,robot.position.line,robot.position.column);
    //fill_td_with_data(document.getElementById("3-0"),0,0);
}


function turn_right(robot) {
    console.log("Turn right");
    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-right', turns);
    fill_td_with_data(robot,robot.position.line,robot.position.column);
}

function moveButtonPress(robot) {
    console.log("move");
}

function fill_td_with_data( robot,rowNumber,columnNumber) {
//let myTDElement =new HTMLElement();
//myTDElement=tdElement;
//tdElement=(tdElement as HTMLElement);
    //console.log("rownumberis:"+ rowNumber+"-columnumberis:"+columnNumber);
    console.log(robot.head);
    let tdElement=document.getElementById(robot.position.line+"-"+robot.position.column);
console.log(tdElement.innerText);
    console.log(tdElement.innerText);
    tdElement.innerHTML="R ";
   switch (robot.head) {
       case 'up':
           tdElement.innerHTML +="↑";
           break;
       case 'down':
           tdElement.innerHTML +="↓";
           break;
       case 'left':
           tdElement.innerHTML +="←";
           break;
       case 'right':
           tdElement.innerHTML +="→";
           break;
   }

    console.log(tdElement.innerText);
    console.log(tdElement.innerHTML);
    if(robot.position.line==0 && robot.position.column==3)
    {
        alert("Heiiiii!!!!  \n You have Won and reached the flag with "+nbOfMoves + "steps and "+turns +" turns !!!");
        main();
    }
}
function clear_td_from_data(robot){
    let tdElement=document.getElementById(robot.position.line+"-"+robot.position.column);
    tdElement.innerHTML="";
}
// Calling main on load
window.onload = main;
