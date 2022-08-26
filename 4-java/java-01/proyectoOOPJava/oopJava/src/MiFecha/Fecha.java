package MiFecha;

public class Fecha {

    private int dia;
    private int mes;
    private int anio;

    public Fecha(){

    }

    public Fecha(int d, int m, int a){
        this.dia = d;
        this.mes = m;
        this.anio = a;
    }


    public  String formato(){
        String dia = Integer.toString(this.dia);
        String mes = Integer.toString(this.mes);
        String anio = Integer.toString(this.anio);

        if (this.dia < 10) {
            dia = "0" + dia;

        }

        if (this.mes < 10) {
              mes = "0" + mes;
        }

        return "Fecha: " + dia + "/" + mes + "/" + anio.substring(2);
    }

}
