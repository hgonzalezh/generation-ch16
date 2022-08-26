package llamadasSys;

import EjemploResumen.Animal;
import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;
import java.util.Scanner;

public class EnlaceSys {
    public void enlazar() {
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        int op;
        boolean salir = false;
        while (salir == false) {

            System.out.println("");

            menuOp.menu();

            System.out.print("Elija una opción: ");
            op = sc.nextInt();

            switch (op) {
                case 1:
                    Saludo objSaludo = new Saludo();
                    objSaludo.saludar();
                    System.out.println(objSaludo.saludar0());
                    break;

                case 2:
                    Persona p = new Persona("Mario", 23, 1098);
                    p.setNombre("Diego");
                    p.setEdad(32);
                    p.setNss(14689);

                    System.out.println("El valor de la variable de instancia p.nombre -> " + p.getNombre());
                    System.out.println("El valor de la variable de instancia p.edad -> " + p.getEdad());
                    System.out.println("El valor de la variable de instancia p.nss -> " + p.getNss());

                    break;

                case 3:
                    Fecha objFecha = new Fecha(3, 12, 1983);
                    System.out.println(objFecha.formato());
                    break;

                case 4:
                    Animal miAnimal = new Animal("Falco");
                    miAnimal.setEdad(3);

                    System.out.println("El nombre es: " + miAnimal.getNombre());
                    System.out.println("Y tiene " + miAnimal.getEdad() + " años.");
                    break;

                case 5:
                    salir = true;
                    break;

                default:
                    System.out.println("<-- Opción no válida -->");
                    break;
            }
        }
    }
}
