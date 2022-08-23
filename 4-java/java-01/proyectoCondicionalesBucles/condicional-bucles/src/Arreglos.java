public class Arreglos {
    public static void main(String[] args) {

        // Arreglos
        // En Java, los arreglos no pueden mezclar tipos de datos

        int[] numerosAleatorios = {1,2,3,4,5,6};
        String[] valores = {"Hola", "Adios", "etc"};

        // Notación alterna para declarar arreglos: byte otrosNumeros[] = {1,2,3}

        // En java, los arreglos tiene un tamaño definido
        char[] caracteres = new char [4];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';

        System.out.println(numerosAleatorios.length);
        System.out.println(valores);
        System.out.println(caracteres);

        //for each
        for(String elemento : valores){
            System.out.println(elemento);
        }

        for (int numero: numerosAleatorios){
            System.out.println(numero);
        }
    }
}
