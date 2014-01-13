<?php

class Statuspedido extends DataMapper {
    var $table = 'statuspedidos';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","descripcion","deshabilitado");
}
