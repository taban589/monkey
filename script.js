var cnt=0;
var changerH=50;
var changerW=100;
function noF(){
    var myYes=document.getElementById("yes");
    var currentWidth=myYes.clientWidth;
    var currentHeight=myYes.clientHeight;
    myYes.style.width=(currentWidth+changerW)+"px";
    myYes.style.height=(currentHeight+changerH)+"px";
    if(myYes.clientWidth>=1700)
        document.getElementById("no").style.display="none";
    switch(cnt){
        case 0:
            document.getElementById("title").innerHTML="Sigur?";
        break;
        case 1:
            document.getElementById("title").innerHTML="Sigur, sigur?";
        break;
        case 2:
            document.getElementById("title").innerHTML="Chiar esti sigura?";
        break;
        case 3:
            document.getElementById("title").style.fontFamily="Times New Roman";
            document.getElementById("title").innerHTML="Haideeee";
        break;
        case 4:
            document.getElementById("title").innerHTML="Te roooooog";
        break;
        case 5:
            document.getElementById("title").innerHTML="Eu zic sa te razgandesti.";
        break;
        case 6:
            document.getElementById("title").innerHTML="RAZGANDESTE-TE";
        break;
        case 7:
            myYes.style.fontSize="200px";
            document.getElementById("title").innerHTML="RAZGANDESTE-TEEEEEEEEE";
            myYes.style.width=(currentWidth+500)+"px";
            myYes.style.height=(currentHeight+500)+"px";
        break;
        case 8:
            document.getElementById("no").style.display="none";
        break;
    }
    cnt++;
}
function yesF(){
    document.getElementById("no").style.display="none";
    document.getElementById("yes").style.display="none";
    document.getElementById("heart").style.display="block";
    document.getElementById("title").style.fontFamily="Times New Roman";
    document.getElementById("title").innerHTML="YESSSSSS";
    document.getElementById("title").style.display="none";
}