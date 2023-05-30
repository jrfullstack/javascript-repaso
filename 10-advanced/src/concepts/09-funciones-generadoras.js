/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {

    // const mygenerator = myFirstGeneratorFunction();

    // llamamos la variable q contiene el contenido de la funcion generadora
    // y con next llamamos a cada parada
    // console.log(mygenerator.next());

    // ponemos en una variable el valor q genera la funcion
    const genId = idGenerator();
    
    // creamos un boton con el nombre de click me y lo anadimos al element
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    element.append(button);
    
    // creamos una funcion donde extramos el valor
    // y luego mandamos al boton el valor
    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    // por cada click le mandamos el valor generado
    button.addEventListener('click', renderButton);
    
};

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}


// no funcionan con funciones de flechas
// para crearla debemos poner el asterisco despues de la palabra function*
// function* myFirstGeneratorFunction(){

//     // los yeild son las paradas de cada llamada a la funcion
//     yield 'Primer valor';
//     yield 'Segundo valor';
//     yield 'Tercer valor';
//     yield 'Cuarto valor';

//     return 'Ya no hay valores';
// }