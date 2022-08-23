public class Ejercicio {
    public static void main(String[] args) {
        String patron = "";

            for (byte i = 0;i < 5; i++){
                    patron = patron + "*";
                    System.out.println(patron);
                }

                patron = "*****";
                StringBuilder cadena = new StringBuilder(patron);
                System.out.println(cadena);
                for (byte i = 4;i > 0; i--){
                    cadena = cadena.deleteCharAt(i);
                    System.out.println(cadena);
                }


            }
        }



