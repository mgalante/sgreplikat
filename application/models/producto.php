<?php

class Producto extends DataMapper {
    var $table = 'productos';

        var $has_many = array(
    
        "pedidoitem"
    
        ,"productopieza"
    
        );



        var $has_one = array(
    
        "statusproducto"
    
        );

}
