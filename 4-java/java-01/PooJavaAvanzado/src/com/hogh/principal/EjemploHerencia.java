package com.hogh.principal;

import com.hogh.herencia.Hija;
import com.hogh.herencia.Hijo;

public class EjemploHerencia {

    public static void main(String[] args) {
        Datos datos = new Datos();
        datos.recopilarDatos();

        Hija h = new Hija();
        System.out.println("Valor de 'a' desde la clase Hija: " + h.getA());

        Hijo ho = new Hijo();
        ho.visualizarABC();
    }

}
