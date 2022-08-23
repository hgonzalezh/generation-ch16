import java.util.*;

public class Diccionario {
    public static void main(String[] args) {
        Map<String, String> diccionario = new HashMap<String, String>();

        diccionario.put("uno","one");
        diccionario.put("dos","two");
        diccionario.put("tres","three");
        diccionario.put("cuatro","four");
        diccionario.put("cinco","five");
        diccionario.put("seis","six");
        diccionario.put("siete","seven");
        diccionario.put("ocho","eight");
        diccionario.put("nueve","nine");
        diccionario.put("diez","ten");
        diccionario.put("once","eleven");
        diccionario.put("doce","twelve");
        diccionario.put("trece","thirteen");
        diccionario.put("catorce","fourteen");
        diccionario.put("quince","fifteen");
        diccionario.put("dieciseis","sixteen");
        diccionario.put("diecisiete","seventeen");
        diccionario.put("dieciocho","eighteen");
        diccionario.put("diecinueve","nineteen");
        diccionario.put("veinte","twenty");

        System.out.println("Ingresa un numero en inglés del 1 al 20: ");
        Scanner sc = new Scanner(System.in);
        String entradaUsuario = sc.next();

        for (Map.Entry<String,String> valor: diccionario.entrySet()){

            if (valor.getValue().equals(entradaUsuario)) {

                System.out.println("La palabra en español para " + entradaUsuario + " es " + valor.getKey());

            }

        }

    }
}
