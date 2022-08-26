package MiEjemploJava;

public class EjemploPersona {

    public static void main(String[] args) {

        Persona p = new Persona("Mario", 23, 1098);
        Persona p0 = new Persona();

        p.setNombre("Diego");
        p.setEdad(32);
        p.setNss(14689);

        System.out.println("El valor de la variable de instancia p.nombre -> " + p.getNombre());
        System.out.println("El valor de la variable de instancia p.edad -> " + p.getEdad());
        System.out.println("El valor de la variable de instancia p.nss -> " + p.getNss());
    }
}
