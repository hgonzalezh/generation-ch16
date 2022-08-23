import java.util.Set;
import java.util.HashSet;

public class Colecciones2 {

    public static void main(String[] args) {
        //Set
        //HashSet

        // No guardan los valores en el orden en que se agregan
        // Set no permite elementos duplicados
        // La colección que funciona más rápido

        Set<String> miSet = new HashSet<>();

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");

        // No puede utlizarse el indice en colecciones HashSet
        miSet.remove("Felipe");

        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Juan"));

        for(String nombre : miSet){
            System.out.println(nombre);
        }
    }
}
