public class EjemploString {
    public static void main(String[] args) {
        String curso = "Curso en java";
        String nombre = "Héctor González";
        String resultado = new String("Curso en java");
        System.out.println("Resultado = " + resultado);

        boolean esIgual = curso == resultado;
        System.out.println("esIgual = " + esIgual);

        esIgual = curso.equals(resultado);
        System.out.println("esIgual = " + esIgual);

        String concat = curso + " con " + nombre;
        System.out.println("concat = " + concat);

        String dia = "Jueves";
        String concat1 = concat.concat(" ").concat(dia);
        System.out.println("concat1 = " + concat1);

        int i = 5;
        int j = 4;
        float division = (float) i / (float)j;
        System.out.println("div = " + division);
        System.out.println("div = " + ((float)i / (float)j));

    }
}
