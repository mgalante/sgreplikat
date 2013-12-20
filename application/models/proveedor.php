<?php

class Proveedor extends DataMapper {
    var $table = 'proveedores';
    var $has_one = array("statusproveedor");
    var $fields = array("nombre","direccion","telefono","contacto", "email", "comentario", "statusproveedor_id");
}
