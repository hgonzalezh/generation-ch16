package j_interfaz;

import java.sql.SQLOutput;

public class EjemploTest {
    public static void main(String[] args) {
        System.out.println("Test.CONV = " + Test.CONV);
        System.out.println("Prueba.CONV = " + Prueba.CONV);
        Prueba p = new Prueba();
        System.out.println("p = " + p.CONV);

        Test ts = new Prueba();
        ts.metodo1(3);
        System.out.println(ts.metodo2("hola"));

        p.metodoPropio();
    }
}
