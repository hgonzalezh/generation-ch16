import java.util.ArrayList;
import java.util.List;

public class Colecciones {

    public static void main(String[] args) {

        // List - ArrayLists
        // Los valores se ordenan conforme se van agregando
        // Permiten tener valores duplicados
        // Es una coleccion de objetos de un mismo tipo

        List<String> meses = new ArrayList<String>();

        // .add([index] element) - Añade un elemento a la list en la posicion index especificada
        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add(1,"Abril");

        // .remove (index) - Remueve el elemento en la posicion index, regresa el elemento eliminado
        String mes = meses.remove(3);

        System.out.println(meses);
        System.out.println(mes);

        // .get(index) - Retorna el elemento en la posicion indicada
        System.out.println( meses.get(0) );

        // .size() - Retorna el numero de elementos en la lista
        System.out.println(meses.size());

        for(String elemento : meses){
            System.out.println(elemento);
        }

        // List<int> numeros = new ArrayList<int>();


        // Clases wrapper o envolventes - Permite utilizar valores primitivos como objetos
        int num1 = 10;
        Integer num2 = 10;

        System.out.println(num1 + 10);
        System.out.println(num2 - 5);
        System.out.println(num2.getClass().getSimpleName());

        List<Integer> numeros = new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(98);
        numeros.add(90);

        System.out.println(numeros);

    }

}
