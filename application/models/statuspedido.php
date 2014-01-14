<?php

class Statuspedido extends DataMapper {
    var $table = 'statuspedidos';

        var $has_many = array(
    
        "pedido"
    
        );



}
