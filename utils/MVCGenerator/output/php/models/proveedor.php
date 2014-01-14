<?php

class Proveedor extends DataMapper {
    var $table = 'proveedores';

        var $has_many = array(
    
        "ordendecompra"
    
        ,"proveedorpieza"
    
        );



        var $has_one = array(
    
        "statusproveedor"
    
        );

}
