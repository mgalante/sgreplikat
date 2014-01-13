<?php

class Pedidoitem extends DataMapper {
    var $table = 'pedidoitems';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","pedido_id","producto_id","precio_unitario","cantidad","deshabilitado");
}
