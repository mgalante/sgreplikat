<?php

class Productopieza extends DataMapper {
    var $table = 'productopiezas';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","producto_id","pieza_id","cantidad","deshabilitado");
}
