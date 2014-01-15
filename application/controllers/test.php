<?php

require(APPPATH.'libraries/REST_Controller.php');
class Test extends REST_Controller {

    public function index_get()
    {
     /*   $proveedores = new Proveedor();
        $proveedores->get();

        foreach($proveedores as $proveedor)
        {
            echo $proveedor->nombre;
            var_dump($proveedor->to_array());
            $proveedor->statusproveedor->get();
            echo $proveedor->statusproveedor->descripcion;
        }
*/
        $this->response(array("kala" => "lal"), 401);
    }
}