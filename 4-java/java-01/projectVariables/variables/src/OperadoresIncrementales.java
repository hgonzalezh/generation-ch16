public class OperadoresIncrementales {
    public static void main(String[] args) {
        //pre-incremento
        //i decrementa y luego su valor se vuelve el de j
        int i = 1;
        int j = --i;
        System.out.println("i = " + i);
        System.out.println("j = " + j);
        //post-incremento
        // i le da su valor a i y luego decrementa
        i = 2;
        j = i--;

        System.out.println("i = " + i);
        System.out.println("j = " + j);
    }
}
