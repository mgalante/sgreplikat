<?php

class Pieza extends DataMapper {
    var $table = 'piezas';

        var $has_many = array(
    
        "ordendecompraitem"
    
        ,"productopieza"
    
        ,"proveedorpieza"
    
        );



}
