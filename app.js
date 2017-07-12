/** selector de elementos */
var items = $("li");
/** permite la concatenacion de elementos */
var ul = $(".lista, li");
console.log(items);
console.log(ul);

/** me devuelve el contenido(elemento) */
console.log($(".lista").html());
/** inner text, devuelve el texto de adentro */
console.log($(".lista").text());
/** cambia el contenido(elemento) del html, borra lo que tiene 
$(".lista").html("LISTA");
*/

/** append, otra forma de cargar contenido , a ese hijo lo pone como ultimo elemento del padre*/
var p = "<p>append normal</p>";
$(".lista").append(p);
/** pre pend, igual q apend pero al inicio del elemento */
var pre = "<p>pre pend holaaa</p>";
$(".lista").prepend(pre);

var parrafo = $("p");
/** lista la propiedad clase */
parrafo.attr("class");
/** agrego una clase */
parrafo.attr("class", "claseParrafo");
console.log(parrafo.attr("class"));

/** listo la propiedad 'color' de css */
console.log(parrafo.css("color"));
/** agrego un color */
console.log(parrafo.css("color","blue"));

/** metodo forEach */

$("li").each(function(){
    ($(this).css("color","pink"));
});

/*eventos click*/
$("li").click(function(){
    alert($(this).text());
});

/*tambien se pueden setear los eventos con los prefijos on y off*/
$("p").on("click",function(){
    ($(this).css("color","green"));
});
/** saco el evento
$("p").off("click");
 */