<?php

class Proveedor extends DataMapper {
    var $table = 'proveedores';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","nombre","direccion","telefono","contacto","email","comentario","statusproveedor_id","deshabilitado");
}
