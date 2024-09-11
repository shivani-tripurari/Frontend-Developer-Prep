let textElem = document.querySelector("#name");
let btnFun = document.querySelector("#my-btn");

function changeSizeFun(num){
    function sizeMulTo(x){
        textElem.style.fontSize = `${num*x}px`
    }
    return sizeMulTo
}

let resultantSize = changeSizeFun(7)


btnFun.addEventListener('click',()=>resultantSize(30));