<?php

class Statusproveedor extends DataMapper {
    var $table = 'statusproveedores';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","codigo","descripcion","deshabilitado");
}
