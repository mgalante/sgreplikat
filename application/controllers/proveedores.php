<?php
require(APPPATH.'libraries/REST_Controller.php');

class Proveedores extends REST_Controller{
    public function index_get()
    {
        $proveedores = new Proveedor();
        $proveedores->get();
        $response = array();

        foreach($proveedores as $proveedor)
        {
            $item= $proveedor->to_array();
            $item['type'] = 'proveedor';
            array_push($response,$item);
        }
        $this->response($response,200);
    }

}