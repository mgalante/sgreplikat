<?php

class Ordendecompra extends DataMapper {
    var $table = 'ordendecompras';



        var $has_one = array(
    
        "proveedor"
    
        );

}
