<?php

class Proveedorpieza extends DataMapper {
    var $table = 'proveedorpiezas';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","pieza_id","proveedor_id","precio","comentarios","deshabilitado");
}
