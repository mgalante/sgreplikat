<?php

class Cliente extends DataMapper {
    var $table = 'clientes';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","nombre","apellido","empresa","email","telefono","comentarios","direccion","deshabilitado");
}
