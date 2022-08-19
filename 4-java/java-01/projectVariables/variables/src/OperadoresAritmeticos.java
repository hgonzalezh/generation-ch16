import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int i = 5, j = 4, suma = i + j;
        System.out.println("Suma = "+suma );

        System.out.println("i + j = " + i +  j);
        System.out.println("i + j = " + (i +  j));

        int resta = i - j;
        System.out.println("resta = " + resta);
        System.out.println("i - j = " + (i-j));

        int multi = i * j;
        System.out.println("Multi = " + multi);
        System.out.println("i * j = " + (i * j));

        int div = i / j;
        System.out.println("Div = "+div);
        float div1 = (float)i / (float)j;
        System.out.println("div1 = "+div);

        int resto = i % j;
        System.out.println("resto = " + resto);

        Scanner scanner = new Scanner(System.in);

        System.out.println("cuál es tu nombre?");
        String dato = scanner.next();
        System.out.println("Mi nombre es: " + dato);

        System.out.println("cuál es tu edad?");
        String dato1 = scanner.next();
        int edad = Integer.parseInt(dato1);
        System.out.println("Mi edad es: " + edad);

    }
}
