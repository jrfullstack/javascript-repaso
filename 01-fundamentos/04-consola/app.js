

let n = 10,
    m = 30,
    o = 50,
    p = n + o;


// 01 diferentes funciones del console
// console.log(p);
// console.info(p);
// console.warn(p);
// console.error(p);

// 02 para concatenar un string usamos coma,
// pero en este caso para saber de quien es el valor de cada variable
// cuando tenemos parentesis () es por que es una funcion o es un metodo
// un metodo es una funcion que se encuentra dentro de un objeto
// console es el objeto y log es el metodo
// los argumentos es lo que colocamos dentro de los parentesis
// console.log('n', n);
// console.log('m', m);
// console.log('o', o);
// console.log('p', p);

// 03 otra manera de mostrar el valor y su variable es con las {}
// console.log({n});
// console.log({m});
// console.log({o});
// console.log({p});

// 04 podemos usar codigo de css en el console con %c
// console.log('%c Mis Variables','color:red; font-weight:bold')


let a = 10,
    b = 'Hola',
    c = 'Superman',
    f = 20,
    d = a + f;

// para mostrar como tabla
console.table({a, b, c, f, d})