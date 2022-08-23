import java.util.*;

public class DiccionarioExtra {

    public static void main(String[] args) {

        Map<String,String> diccionario = new HashMap<>();

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

        Random aleatorio = new Random();
        int ran = aleatorio.nextInt(20)+1;
        //System.out.println(ran);

        /*for (int i = 0; i <= 5; i++){
            int ran = aleatorio.nextInt(20)+1;
            Int numerosRand = ran;
            System.out.println(numerosRand);
        }*/
        Object palabraATraducir = diccionario.keySet().toArray()[ran];
        System.out.println(palabraATraducir);
        String valor = diccionario.get(palabraATraducir);
        //System.out.println(diccionario.get(hola));

        Scanner input = new Scanner(System.in);
        System.out.println("Ingresa la palabra en ingles");
        String ingresado = input.next();

        if (valor.equals(ingresado)){
            System.out.println("correcto");
        } else {
            System.out.println("incorrecto");
        }

    }
}

