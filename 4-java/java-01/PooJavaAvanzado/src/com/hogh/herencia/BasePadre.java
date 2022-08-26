package com.hogh.herencia;

public class BasePadre {

    protected int a;
    protected double b;
    protected String c;

    public BasePadre() {

    }

    public void visualizarA() {
        System.out.println("El valor de a es: " + this.a);
    }

    public void visualizarABC() {
        System.out.println("\n Los valores de a, b y c son: \n" + "a: " +this.a + "\n" + "b: " + this.b + "\n" + "c: " + this.c);
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }

}
