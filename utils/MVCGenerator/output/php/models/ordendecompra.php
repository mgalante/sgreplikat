<?php

class Ordendecompra extends DataMapper {
    var $table = 'ordendecompras';
    // var $has_one = array("");
	// var $has_many = array("");
    
	var $fields = array("id","numero","proveedor_id","fecha","fecha_recepcion_estimada","fecha_recepcion_real","estado","deshabilitado");
}
