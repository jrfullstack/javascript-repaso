/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwayNoSecuencialComponent = async (element) => {

    // para ver el tiempo q tarda la ejecucion
    console.time('Start');
    
    // definimos las promesas en variables  
    // cada promesa es independiente
    // no necesita una una de la otra para obtener el valor o resolverse  
    // este metodo desparara cada una y hasta q no se resuelva no avanzara a la siguiente
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    // para q se disparen todas simultaneamente usamos all
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])


    // insertamos en el html las promesas
    element.innerHTML = `    
        value 1: ${value1} <br>
        value 2: ${value2} <br>
        value 3: ${value3} <br>
    `;

    // marcamos el final de la ejecucion
    console.timeEnd("Start");
    
};

const slowPromise = () => new Promise(resolve => {

    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {

    setTimeout(() => {
        resolve('Medium Promise')
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {

    setTimeout(() => {
        resolve('Fast Promise')
    }, 1000);
});