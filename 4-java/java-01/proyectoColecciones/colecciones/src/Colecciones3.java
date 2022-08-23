import java.util.*;


public class Colecciones3 {
    public static void main(String[] args) {

        System.out.println("ArrayList");
        List<String> comidas = new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2,"Esquite");

        System.out.println(comidas);

        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1,2,3,56,789));
        System.out.println(numeros);

        System.out.println("--------------------------");
        System.out.println("HashSet");

        Set<String> ciudades = new HashSet<String>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MTY");

        System.out.println(ciudades);

        // Otra forma de crear HashSets
        Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true,false,false,true));
        System.out.println(verdad);

        System.out.println("--------------------------");
        System.out.println("HashMap");

        // Los HashMaps en Java son similares a los objetos en Js debido a que nos permiten
        // guardar pares de valores (clave, valor)

        Map<Integer, String> alumnos = new HashMap<Integer, String>();

        // Método put(key, value) - Permite agregar un nuevo par llave-valor
        // Si la llave ya existe, reemplaza su valor

        alumnos.put(1,"Pedro");
        alumnos.put(2,"Sofia");
        alumnos.put(3,"Salma");
        alumnos.put(4,"Miguel");
        alumnos.put(4,"Saul");
        alumnos.put(5,"Saul");

        System.out.println(alumnos);
        System.out.println(alumnos.size());
        System.out.println(alumnos.values());
        System.out.println(alumnos.get(2));

       // Object llaves = alumnos.keySet().toArray()[3];
        //System.out.println(alumnos.get(llaves));
        System.out.println("---------------------------");

        for (int i=0; i < alumnos.size(); i++){
            Object llaves = alumnos.keySet().toArray()[i];
            System.out.println(alumnos.get(llaves));
        }

        for (Integer llave : alumnos.keySet()){
            System.out.println(llave + " - " + alumnos.get(llave));
        }
    }
}
