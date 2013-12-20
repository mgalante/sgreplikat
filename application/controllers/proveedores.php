<?php
require(APPPATH.'libraries/REST_Controller.php');

class Proveedores extends REST_Controller{
    public function list_get()
    {
        $entities = new Proveedor();
        $entities->get();
        $response = array();
        foreach($entities as $entity)
        {
            $item= $entity->to_array();
            $item['type'] = 'proveedor';
            array_push($response,$item);
        }
        $this->response($response,200);
    }

    public function get_get($id)
    {
        $entity = new Proveedor();
        $entity->get_by_id($id);
        $this->response($entity->to_array(), 200);
    }

    public function save_post()
    {
        $this->load->library('generic_repository');
        $entity = new Proveedor();
        $this->generic_repository->update_or_create($entity, json_decode($this->input->post('request'),true));
        $this->response($entity->to_array(), 200);
    }


}