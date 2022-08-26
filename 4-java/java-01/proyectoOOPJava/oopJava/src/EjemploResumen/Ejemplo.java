package EjemploResumen;

public class Ejemplo {

    public static void main(String[] args) {

        //creacion de de instancia
        Animal miAnimal = new Animal("Falco");

        //mandamos edad al creador
        miAnimal.setEdad(3);

        //mostramos el nombre
        System.out.println("El nombre es: "+miAnimal.getNombre());

        //mostramos la edad
        System.out.println("y tiene "+miAnimal.getEdad()+" años");

    }
}