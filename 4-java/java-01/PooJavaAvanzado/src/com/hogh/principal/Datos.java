package com.hogh.principal;

import com.hogh.herencia.BasePadre;

import java.util.Scanner;

public class Datos {

    public void recopilarDatos(){
        Scanner sc = new Scanner(System.in);
        BasePadre basePadre = new BasePadre();

        System.out.print("Ingresa el valor de a: ");
        int valorA = sc.nextInt();

        System.out.print("Ingresa el valor de b: ");
        double valorB = sc.nextDouble();

        System.out.print("Ingresa el valor de c: ");
        String valorC = sc.next();

        basePadre.setA(valorA);
        basePadre.setB(valorB);
        basePadre.setC(valorC);

        basePadre.visualizarABC();

    }

}
