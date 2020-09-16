'use strict'
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    input: process.stdin,
    output: process.stdout
});

rl.question("que operacion realizaras + - * / ? ", function(opcion) {
    if(opcion == '+' || opcion == '-' || opcion == '*' || opcion == '/'){
        console.log('Parametro incorrecto');
        rl.question("Ingrese numero 1 ", function(number1) {
            rl.question("Ingrese numero 2",function(number2){
    
                switch(opcion){
                    case '+':
                    let suma = parseFloat(number1) + parseFloat(number2);
                    console.log("suma" + ": "+  suma);
                    break;
                    case '-':
                    let resta = parseFloat(number1) - parseFloat(number2);
                    console.log("resta:"  + resta);
                    break;
                    case '*':
                        let product = parseFloat(number1) * parseFloat(number2);
                    console.log("product:"  + product);
                    break;
                    case '/':
                        let div = parseFloat(number1) / parseFloat(number2);
                        console.log("division:"  + div);
                    break;
    
                    default:
                        console.log('Parametro incorrecto');
                    break;
                }
                rl.close();
    
            });
           
        });
    }else{
        console.log('Parametro incorrecto');
        exit();
    }
    
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
