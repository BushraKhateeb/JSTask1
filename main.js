function largerFontSize(){
    document.querySelector('body').classList.add('largerFontSize');
    document.querySelector('body').classList.remove('smallerFontSize');
}
function smallerFontSize(){
    document.querySelector('body').classList.add('smallerFontSize');
    document.querySelector('body').classList.remove('largerFontSize');
}


document.querySelector(".larger").onclick=largerFontSize;

document.querySelector(".smaller").onclick=smallerFontSize;
console.log(document.querySelector(".larger"))