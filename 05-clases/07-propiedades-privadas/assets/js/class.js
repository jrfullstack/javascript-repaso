

class Rectangulo {

    // para lograr que esta propiedad sea privada, q no se pueda modificar desde a fuera
    // usamos la # antes del nombre de la propiedad
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base   = base;
        this.altura = altura;

        // la llamamos igual con #
        this.#area = base * altura;
    }
}


const rectangulo = new Rectangulo(10, 15);

// si no tiene # de privada, podriamos cambiar el valor desde fuera
// pero como no queremos eso la ponemos privada #
// rectangulo.area = 100;


console.log(rectangulo);