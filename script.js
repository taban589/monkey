var cnt=0;
var changerH=50;
var changerW=100;
function noF(){
    var myYes=document.getElementById("yes");
    var currentWidth=myYes.clientWidth;
    var currentHeight=myYes.clientHeight;
    myYes.style.width=(currentWidth+changerW)+"px";
    myYes.style.height=(currentHeight+changerH)+"px";
    if(myYes.clientWidth>=1700){
        document.getElementById("no").style.display="none";
        document.getElementById("title").innerHTML="NA! Ce ai sa faci acum?";
    }
    switch(cnt){
        case 0:
            document.getElementById("title").style.fontFamily="CookieMonster";
            document.getElementById("title").innerHTML="Vrei???";
        break;
        case 1:
            document.getElementById("title").innerHTML="Chiar nu vrei?";
        break;
        case 2:
            document.getElementById("title").innerHTML="Deci vrei?";
        break;
        case 3:
            document.getElementById("title").innerHTML="HAIDEEEE";
        break;
        case 4:
            document.getElementById("title").innerHTML="TE ROOOOOG";
        break;
        case 5:
            document.getElementById("title").innerHTML="eu zic sa te razgandesti.";
            document.getElementById("title").style.marginTop="100px";
        break;
        case 6:
            document.getElementById("title").innerHTML="RAZGANDESTE-TE";
        break;
        case 7:
            myYes.style.fontSize="200px";
            document.getElementById("title").innerHTML="RAZGANDESTE-TEEEEEEEEE";
            document.getElementById("title").style.marginTop="0";
            myYes.style.width=(currentWidth+500)+"px";
            myYes.style.height=(currentHeight+500)+"px";
        break;
        case 8:
            document.getElementById("no").style.display="none";
            document.getElementById("title").style.display="none";
            myYes.style.width="device-width";
            myYes.style.height="device-height";
            myYes.style.border="10px solid pink";
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
