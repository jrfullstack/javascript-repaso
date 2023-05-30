


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent = (element) => {

    // manera normal de acceder a las variables de entorno
    // console.log(process.env);

    // pero para acceder usando vite
    console.log(import.meta.env);

    // podemos preguntar si estamos en desarrollo o produccion
    // y para llamar nuestras variables
    const html = `    
        Dev: ${import.meta.env.DEV} <br/>
        Prod: ${import.meta.env.PROD} <br/>
        KEY: ${import.meta.env.VITE_API_KEY} <br/>
        URL: ${import.meta.env.VITE_BASE_URL} <br/>
    `;

    element.innerHTML = html;
}