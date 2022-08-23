import java.util.Objects;
import java.util.Scanner;

public class Bucles {
    public static void main(String[] args) {

        //for - bucle controlado

        for (int i = 0; i < 10; i++){
            System.out.println(i);
        }

        //while - bucle no controlado

        // Mientras la condición sea true
        String condicion = "";
        Scanner sc = new Scanner(System.in);

        // == != Compara la referencia del objeto
        // Para Strings, se necesita el método .equals()
        while( ! Objects.equals(condicion, "Hola") ){

            System.out.println("Saludame");
            condicion = sc.next();
        }

        // Do while - Ejecuta el codico al menos una vez
        do {
            System.out.println("Saludame x2");
            condicion = sc.next();
        } while( !Objects.equals(condicion, "Hola") );

    }
}
