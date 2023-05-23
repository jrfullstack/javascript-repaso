


class Persona {

    // extraemos las propiedades del objeto que viene de forma desestructurada {}
    static porObjeto({ nombre, apellido, pais  }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getIngo() {
        console.log(`info: ${this.nombre}, ${this.apellido}. ${this.pais}`);
    }
}

// variables normales que se enviaran a el constructor de la clase
const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

// objeto normal que se enviara a el contructor de la clase
const jrey = {
    nombre:   'Jimmy',
    apellido: 'Reyes',
    pais:     'Republica Dominicana'
}

// con variables
const persona1 = new Persona(nombre1, apellido1, pais1);

// con objetos
// llamamos a el metodo estatico
// y mandamos el objeto
const persona2 = Persona.porObjeto(jrey);

persona1.getIngo();
persona2.getIngo();