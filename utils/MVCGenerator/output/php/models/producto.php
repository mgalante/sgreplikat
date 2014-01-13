<?php

class Producto extends DataMapper {
    var $table = 'productos';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","codigo","titulo","descripcion","precio","statusproducto_id","deshabilitado");
}
