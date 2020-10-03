document.onkeydown = detectKey;

function detectKey(e){
    posCima = document.getElementById("pad").offsetTop;

    console.log(posCima);

    e = e || window.Event;
    if(e.keyCode == '40' && posCima <= 456){

        //desce
        document.getElementById("pad").style.top = (posCima + 20) + "px";
    }
    else if(e.keyCode == '38' && posCima > 110){

        //sobe
        document.getElementById("pad").style.top = (posCima - 20) +  "px";
    }
}