/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading';

    
    const renderValue = (value) => {
        element.innerHTML = value;
    }

    // regresara la primera funcion q se resuelva dentro del callback
    // si tenemos varios endpoint con la misma informacion
    // podemos devolver el primero que se resuelva
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then(renderValue)
    
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