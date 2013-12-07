<?php

class Proveedor extends DataMapper {
    var $table = 'proveedores';
    var $has_one = array("statusproveedor");
}
