<?php

class Productopieza extends DataMapper {
    var $table = 'productopiezas';



        var $has_one = array(
    
        "producto"
    
        ,"pieza"
    
        );

}
