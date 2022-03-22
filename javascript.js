


function initialize(){
    let first_input = 0;
    let second_input = 0;

    let input_top = document.querySelector("#p-display-top");

    let btn_0 = document.querySelector("#btn-0");
    let btn_1 = document.querySelector("#btn-1");
    let btn_2 = document.querySelector("#btn-2");
    let btn_3 = document.querySelector("#btn-3");
    let btn_4 = document.querySelector("#btn-4");
    let btn_5 = document.querySelector("#btn-5");
    let btn_6 = document.querySelector("#btn-6");
    let btn_7 = document.querySelector("#btn-7");
    let btn_8 = document.querySelector("#btn-8");
    let btn_9 = document.querySelector("#btn-9");
    let btn_divide = document.querySelector("#btn-divide");
    let btn_multipy = document.querySelector("#btn-multipy");
    let btn_minus = document.querySelector("#btn-minus");
    let btn_point = document.querySelector("#btn-point");
    let btn_equals = document.querySelector("#btn-equals");
    let btn_plus = document.querySelector("#btn-plus");

    let btn_clear = document.querySelector("#btn-clear");

    btn_0.addEventListener("click", function(){
        input_top.textContent +='0';
    });
    btn_1.addEventListener("click", function(){
        input_top.textContent +='1';
    });
    btn_2.addEventListener("click", function(){
        input_top.textContent +='2';
    });
    btn_3.addEventListener("click", function(){
        input_top.textContent +='3';
    });
    btn_4.addEventListener("click", function(){
        input_top.textContent +='4';
    });
    btn_5.addEventListener("click", function(){
        input_top.textContent +='5';
    });
    btn_6.addEventListener("click", function(){
        input_top.textContent +='6';
    });
    btn_7.addEventListener("click", function(){
        input_top.textContent +='7';
    });
    btn_8.addEventListener("click", function(){
        input_top.textContent +='8';
    });
    btn_9.addEventListener("click", function(){
        input_top.textContent +='9';
    });

    btn_divide.addEventListener("click", function(){
        
        if(first_input == 0){
            first_input = parseInt(input_top.textContent)
            console.log(first_input)
        }
        input_top.textContent += ' / '
    });
    btn_multipy.addEventListener("click", function(){
        if(first_input == 0){
            first_input = parseInt(input_top.textContent)
            console.log(first_input)
        }
        input_top.textContent += ' X '
    });
    btn_minus.addEventListener("click", function(){
        if(first_input == 0){
            first_input = parseInt(input_top.textContent)
            console.log(first_input)
        }
        input_top.textContent += ' - '
    });
    btn_plus.addEventListener("click", function(){
        if(first_input == 0){
            first_input = parseInt(input_top.textContent)
            console.log(first_input)
        }
        input_top.textContent += ' + '
    });

    btn_equals.addEventListener("click", function(){

        let exp = input_top.textContent.split(" ")
        input_top.textContent = evaluate(exp);
        first_input = parseInt(input_top.textContent)
    });
    btn_point.addEventListener("click", function(){

        console.log(first_input)
    });
    btn_clear.addEventListener("click", function(){
        first_input = 0;
        input_top.textContent = "";
    });
    

}

function evaluate(args){
    
    if (args[1] === '+'){
        return parseFloat(args[0]) + parseFloat(args[2])        
    }else if(args[1]==='-'){
        return parseFloat(args[0]) - parseFloat(args[2])
    }else if(args[1]==='X'){
        return parseFloat(args[0]) * parseFloat(args[2])
    }else if(args[1]==='/'){
        return parseFloat(args[0]) / parseFloat(args[2])
    }

}


initialize()
