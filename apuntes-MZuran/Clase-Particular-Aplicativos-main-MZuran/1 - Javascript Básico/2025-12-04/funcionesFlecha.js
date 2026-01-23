/*
    3 maneras de escribir una función (en javascript);
*/

//  1.  Función Declarada
function duplicar(x) {
    return 2*x
}
/*
    Una función declarada tiene la ventaja que se crea automáticamente una variable y se le asigna
    el contenido de la función adentro.
*/

//  2.  Función Flecha (Función Lambda)
() => {}
//  {}  objeto
//  ()  número
//  >=  operador mayor o igual
/*
    A diferencia de las funciones declaradas, la función flecha NO crea una variable y NO asigna la función
    a ninguna variable. Se debe hacer a mano.
*/
let triplicar
triplicar = (x) => {
    return 3*x
}

//  3.  Función Flecha (Con sintaxis abreviada)
/*
    La función flecha se puede escribir con menos caracteres.
    Los caracteres que se pueden sacar son los siguientes;

        a) Si la función SÓLO RECIBE UN SÓLO PARÁMETRO, podemos no escribir los paréntesis
        b) Si lo ÚNICO QUE HACE LA FUNCIÓN ES UN RETURN, podemos no escribir las llaves ni la palabra "return"
*/

let cuadruplicar
cuadruplicar = x => 4*x