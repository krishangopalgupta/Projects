    const buttons = document.querySelectorAll(".btn");
    const screen = document.querySelector(".screen");
    const clear = document.querySelector(".symbolC");
    const equal = document.querySelector(".equal");

    console.log(buttons);
    buttons.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            let  value = e.target.dataset.num;
            screen.value += value;
            // console.log(typeof e.target);
            // console.log(typeof e.target.dataset);
            // console.log(typeof e.target.dataset.num);
            // console.log(typeof e.target.dataset.num);
            // console.log(screen.value);
        })
    });

    equal.addEventListener('click',(e)=>{
        // console.log(screen.value);
        if(screen.value === '='){
            // screen.value.style.fontSize = "1rem";
            // screen.value ="please enter";
            screen.value = "";
        }
        else{
            // let answer = eval(screen.value);
            // screen.value = answer;
            console.log(eval(screen.value));
        }
    })

    clear.addEventListener("click",(e)=>{
        screen.value = ' ';
    })

// })();
