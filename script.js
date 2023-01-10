function play(){
    var boi = document.getElementById("search").value;
    var sound= new Audio("lean.mp3");
    var what= new Audio("what.mp3");
    var Adlib= new Audio("Adlib.mp3");
    sound.loop=true;
    sound.autoplay=false;
    what.loop=true;
    what.autoplay=false;
    Adlib.loop=true;
    Adlib.autoplay=false;
        
    if(boi=="playboiCarti"){
        what.play();
        sound.play();
        Adlib.play();
        alert ("WHAT!");
        alert ("It's purple like lean! :P");
        return false;
    }
}