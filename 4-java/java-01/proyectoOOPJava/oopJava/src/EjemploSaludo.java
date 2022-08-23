public class EjemploSaludo {

    public static void main(String[] args) {
        // Pasos de la instanciación
        // Declarar el objeto
        // Construir el objeto
        // Invocar al método/propiedad
        Saludo objSaludo = new Saludo();
        objSaludo.saludar();

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("Este es otro objeto: ->" + objSaludo0.saludar0());
    }
}
