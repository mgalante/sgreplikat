<?php

class Pedido extends DataMapper {
    var $table = 'pedidos';

        var $has_many = array(
    
        "pedidoitem"
    
        );



        var $has_one = array(
    
        "cliente"
    
        ,"statuspedido"
    
        );

}
