package com.hogh.principal;

import com.hogh.herencia.BasePadre;
import com.hogh.herencia.Hija;
import com.hogh.herencia.Hijo;


public class EjemploHerencia {

    public static void main(String[] args) {
        Datos datos = new Datos();
        datos.recopilarDatos();

        Hija h = new Hija();
        System.out.println("Valor de 'a' desde la clase Hija: " + h.getA());

        Hijo ho = new Hijo();
        ho.setA(14689);
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);

        Object miObj = new BasePadre();

        System.out.println("Atributo de Clase Base Padre: " + objB.getA());
        System.out.println("Atributo de Clase hijo: " + ho.getA());
    }

}
