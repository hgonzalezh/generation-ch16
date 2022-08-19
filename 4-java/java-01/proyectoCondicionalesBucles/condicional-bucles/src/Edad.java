import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {

        System.out.println("Esta es la clase Edad");

        Scanner escaner = new Scanner(System.in); // instanciar
        System.out.println("Escribe tu edad: ");
        int edad = escaner.nextInt();
        escaner.close(); // Cierra el escáner y ya no puede utilizarse


        System.out.println(edad);

        // if else
        if(edad >= 18) {
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres menor de edad");
        }

        // Operador tenario ()?:
        String resultado = (edad >=18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);

    }
}
