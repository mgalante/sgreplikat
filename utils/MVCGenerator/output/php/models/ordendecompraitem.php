<?php

class Ordendecompraitem extends DataMapper {
    var $table = 'ordendecompraitems';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","ordendecompra_id","pieza_id","cantidad","precio_unitario","deshabilitado");
}
