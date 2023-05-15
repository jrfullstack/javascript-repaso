

// Es el ciclo mas usado

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
// inicializar variable
// condicion del ciclo
// incrementacion del ciclo
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn("For In");
// inicializar variable
// el objeto a barrer
for (let i in heroes) {    
    console.log(heroes[i]);
    
}

console.warn("For Of");
// extrar el valor que se encuentra dentro del arreglo
// inicializar variable
// y el objeto a barrer

for (let heroe of heroes) {
    console.log(heroe);    
}