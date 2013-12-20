<?php
require(APPPATH.'libraries/REST_Controller.php');

class Estaticos extends REST_Controller{

    public function getall_get(){
        $status = array("statusproveedor" => array(
                array(
                    "id" => 1,
                    "descripcion" => "activo"
                ),
                array(
                    "id" => 2,
                    "descripcion" => "inactivo"
                )
            )
        );
        //array_push($status,"Activo");
        $this->response($status,200);
    }

}