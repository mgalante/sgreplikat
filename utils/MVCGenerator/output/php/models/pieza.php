<?php

class Pieza extends DataMapper {
    var $table = 'piezas';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","codigo","descripcion","precio","stockactual","stockminimo","stockmaximo","deshabilitado");
}
