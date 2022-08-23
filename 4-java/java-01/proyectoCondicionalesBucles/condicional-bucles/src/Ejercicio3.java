import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa el numero de '*':");
        int asteriscos = sc.nextInt();

        System.out.println("Ingresa la direccion: 1 - Adelante , 2 - Atras");
        int direccion = sc.nextInt();

        switch (direccion) {
            case 1:
                String patron = "";

                for (byte i = 0;i < asteriscos; i++){
                    patron = patron + "*";
                    System.out.println(patron);
                }
                break;

            case 2:
                String patron2 = "*".repeat(asteriscos);
                StringBuilder cadena = new StringBuilder(patron2);
                System.out.println(cadena);
                for (int i = asteriscos - 1; i > 0; i--){
                    cadena = cadena.deleteCharAt(i);
                    System.out.println(cadena);
                }
                break;

            default:
                break;

        }

    }
}
