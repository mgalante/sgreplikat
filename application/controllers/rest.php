<?php
require(APPPATH.'libraries/REST_Controller.php');

class Rest extends REST_Controller
{
    public function index_get()
    {

        $this->response(array("hola"=> "mundo"),200);
    }
}