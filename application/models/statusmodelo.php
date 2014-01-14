<?php

class Statusmodelo extends DataMapper {
    var $table = 'statusmodelos';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","descripcion","deshabilitado");
}
