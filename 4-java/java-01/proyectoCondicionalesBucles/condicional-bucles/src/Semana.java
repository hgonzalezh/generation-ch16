import java.util.Scanner;

public class Semana {

    public static void main(String[] args) {
        System.out.println("Semana");

        Scanner sc= new Scanner(System.in);
        System.out.println("Escribe un número");
        byte diaSemana = sc.nextByte();

        switch (diaSemana) {

            case 1:
                System.out.println("Se escribió un uno");
                break;

            case 2:
                System.out.println("Se escribió un dos");
                break;

            default:
                System.out.println("No entendí");
        }
    }
}
