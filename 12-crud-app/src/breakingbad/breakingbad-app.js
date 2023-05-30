
/**
 * @returns {Promise<Object>} quotes information
 */
const fetchQuotes = async() => {

    // para obtener la respuesta 
    const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/");

    // para obtener la data de la respuesta y la pasamos a json
    const data = await res.json();

    console.log(data[0]);

    // regresamos la data
    return data[0];

}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async(element) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';

    // const quote = await fetchQuotes();

    // creamos los elementos html
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement("h3");
    const nextQuoteButton = document.createElement("button");
    nextQuoteButton.innerText = 'Next Quote';

    // creamos el render para mostar en el html
    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    // escuchamos el boton
    nextQuoteButton.addEventListener("click", async() => {
        // volvemos a poner en loading mientras llega la nueva peticion
        element.innerHTML = 'Loading...';
        
        // hacemos la nueva peticion con la funcion y la pasamos a la variable
        const quote = await fetchQuotes();

        // mandamos el quote al render
        renderQuote(quote);
       

    });
    
    // se mostrara al cargar por primera vez la pagina
    fetchQuotes()
        .then(renderQuote);

}