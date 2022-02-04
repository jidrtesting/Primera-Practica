var d = document.getElementById("dibujando");
var text= document.getElementById("num_Lin");
var evento=document.getElementById("boton");
evento.addEventListener("click", dibujoPorClick);
var lienzo = d.getContext("2d");
var ancho =d.width;



    function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();

    }

function dibujoPorClick(){
    
    var lineas=parseInt(text.value);
    var l=0;
    var yi=0;
    var espacio =ancho/lineas;
    var xf=espacio;
    
        while(l<lineas){
        dibujarLinea("#AAF",0,yi,xf,300);
        l+=1;
        yi+=espacio;
        xf+=espacio;

        }   
dibujarLinea("red",1,1,1,299);
dibujarLinea("red",1,299,299,299);
console.log();

}
