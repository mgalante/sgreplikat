<?php
require(APPPATH.'libraries/REST_Controller.php');

class Statusproveedores extends REST_Controller{
    public function list_get()
    {
        $entities = new Statusproveedor();
        $entities->get();
        $this->response($this->generic_repository->all_to_array($entities),200);
    }

    public function get_get($id)
    {
        $entity = new Statusproveedor();
        $entity->get_by_id($id);
        $this->response($this->generic_repository->to_array($entity), 200);
    }

    public function save_post()
    {
        $entity = new Statusproveedor();
        $this->generic_repository->update_or_create($entity, json_decode($this->input->post('request'),true));
        $this->response($entity->to_array(), 200);
    }
}