package com.hogh.excepcion;

public class ErrorFisicoExcepcion extends Exception {
    public ErrorFisicoExcepcion(Exception ex) {
        super("\t\t<-- Ocurrió un Error Físico -->", ex);
    }
}
