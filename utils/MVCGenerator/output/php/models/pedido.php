<?php

class Pedido extends DataMapper {
    var $table = 'pedidos';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","codigo","cliente_id","fecha_pedido","fecha_entrega","adelanto","restoabonado","comentarios","statuspedido_id","deshabilitado");
}
