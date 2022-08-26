package EjemploResumen;

public class Aclaracion {

    private int atributo1;
    private int atributo2;
    private String atributo3;

    public  Aclaracion(int attr1,int attr2, String attr3){
        atributo1= attr1;
        atributo2= attr2;
        atributo3 = attr3;

    }

    public Aclaracion(){

    }

    public void setAtributo1(int attr1){

        atributo1 = attr1;
    }
    public void setAtributo2(int attr2){

        atributo2 = attr2;
    }
    public void setAtributo3(String attr3){

        atributo3 = attr3;
    }
    public static void main(String[] args) {

        Aclaracion ac = new Aclaracion(5,10,"X");
        System.out.println(ac.atributo1+","+ac.atributo2+","+ac.atributo3);

        Aclaracion ac1 = new Aclaracion();//Creamos un objeto con constructor vacío
        Aclaracion ac2 = new Aclaracion();//Creamos otro objeto con constructor vacío
        //Establecemos los valores de los atributos usando métodos set de cada uno
        ac1.setAtributo1(5);
        ac1.setAtributo2(10);
        ac1.setAtributo3("x");
        //Establecemos los valores de los atributos accediendo directamente a cada uno
        ac2.atributo1 = 5;
        ac2.atributo2 = 10;
        ac2.atributo3 = "x";
        System.out.println(ac1.atributo1 + ", " + ac1.atributo2 + ", " + ac1.atributo3);
        //Mostramos el valor de los atributos de ac1
        //Imprime '5, 10, x'
        System.out.println(ac2.atributo1 + ", " + ac2.atributo2 + ", " + ac2.atributo3);
        //Mostramos el valor de los atributos de ac2
        //Imprime '5, 10, x'
    }

}
