var d = document.getElementById("dibujando");
var lienzo = d.getContext("2d");
var lineas=30;
var l=0;
var yi=0;
var xf=10;
while(l<lineas){
    dibujarLinea("#AAF",0,yi,xf,300);
    l+=1;
    yi+=10;
    xf+=10;

}
dibujarLinea("red",1,1,1,299);
dibujarLinea("red",1,299,299,299)



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
lienzo.beginPath();
lienzo.strokeStyle=color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();

}
