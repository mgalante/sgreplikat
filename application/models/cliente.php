<?php

class Cliente extends DataMapper {
    var $table = 'clientes';

        var $has_many = array(
    
        "pedido"
    
        );



}
