//const readline=require('readline');

/*
function pressedKey(){
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', (str, key) => {
        if (key.ctrl && key.name === 'c') {
            process.exit();
        } else {
            return key.name;
        }
    });
}
*/
function main(){
//console.log(pressedKey());
let tomomom =pressedKommand();

console.log(tomomom);
console.log('after');

}
function pressedKommand() {


    var readline = require('readline');
    var log = console.log;

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Command: ', function (answer) {
        //  if (answer == 'exit') //we need some base case, for recursion
        //closing RL and returning from function.
        log('Got it! Your answer was: "', answer, '"');
         rl.close();
         return answer;
    });
}
/*
var recursiveAsyncReadLine = function () {
    rl.question('Command: ', function (answer) {
      //  if (answer == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        log('Got it! Your answer was: "', answer, '"');
       // recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};
*/


{
    // This is where the program starts.
    main();
}
