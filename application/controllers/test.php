<?php
/**
 * Created by PhpStorm.
 * User: Miguel
 * Date: 04/12/13
 * Time: 19:43
 */

class Test extends CI_Controller {

    public function index()
    {
        $proveedores = new Proveedor();
        $proveedores->get();

        foreach($proveedores as $proveedor)
        {
            echo $proveedor->nombre;
            $proveedor->statusproveedor->get();
            echo $proveedor->statusproveedor->descripcion;
        }
    }
}