<?php

class Proveedorpieza extends DataMapper {
    var $table = 'proveedorpiezas';



        var $has_one = array(
    
        "pieza"
    
        ,"proveedor"
    
        );

}
