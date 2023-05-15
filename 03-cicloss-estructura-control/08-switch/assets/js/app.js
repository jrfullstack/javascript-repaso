


// dia es la variable de control
// switch usa los triple iguales ===
// si no ponemos break ejecutara todos los casos a partir del primer true
// para evitar esto lo sacamos con break
// si nungun caso da true entonce se puede poner un default 
const dia = 1;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    // si nunguna da true
    default:
        console.log('No es domingo, ni lunes, ni martes')
        break;
}