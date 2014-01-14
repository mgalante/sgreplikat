<?php

class Pedidoitem extends DataMapper {
    var $table = 'pedidoitems';



        var $has_one = array(
    
        "pedido"
    
        ,"producto"
    
        );

}
