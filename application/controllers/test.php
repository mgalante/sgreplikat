<?php


class Test extends CI_Controller {

    public function index()
    {
        $proveedores = new Proveedor();
        $proveedores->get();

        foreach($proveedores as $proveedor)
        {
            echo $proveedor->nombre;
            var_dump($proveedor->to_array());
            $proveedor->statusproveedor->get();
            echo $proveedor->statusproveedor->descripcion;
        }

        $this->response(array("hola"=> "mundo"),200);
    }
}