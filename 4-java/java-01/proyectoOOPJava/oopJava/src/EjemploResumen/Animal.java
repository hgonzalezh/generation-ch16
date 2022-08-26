package EjemploResumen;

public class Animal {

    private String raza;
    private String nombre;
    private int edad;

    public Animal( String nuevoNombre){
        this.nombre = nuevoNombre;
    }

    public void setEdad(int nuevaEdad) {
        this.edad = nuevaEdad;
    }

    public int getEdad(){
        return edad;
    }

    public String getNombre(){
        return nombre;
    }
}
