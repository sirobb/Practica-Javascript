class Vehiculo {
    constructor(NumPuertas, CapPasajeros,km) {
        this.NumPuertas = NumPuertas;
        this.CapPasajeros = CapPasajeros;
        this.km = 0;
    }

    Encender() {
        console.log(`Vehiculo encendido`);
    }

    Saludar() {
        console.log(`Hola!, soy un vehiculo, tengo ${this.NumPuertas} puertas y caben ${this.CapPasajeros} pasajeros ${this.km}`)
    }
}

class Auto extends Vehiculo{

}
const auto = new Vehiculo(4, 4);

auto.Saludar();