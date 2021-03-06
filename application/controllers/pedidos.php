<?php
require(APPPATH.'libraries/REST_Controller.php');

class Pedidos extends REST_Controller{

    public function __construct()
    {
        parent::__construct();
        if(!$this->session->userdata('loggedin'))
        {
            $this->response("error", 401);
        }
    }


    public function list_get()
    {
        $entities = new Pedido();
        $entities->where("deshabilitado = 0")->get();
        if($entities->exists()){

            foreach($entities as $entity)
            {
               $entity->cliente->get();
            }

            foreach($entities as $entity)
            {
               $entity->statuspedido->get();
            }

        }
        $this->response($this->generic_repository->all_to_array($entities),200);
    }

    public function get_get($id)
    {
        $entity = new Pedido();
        $entity->where("deshabilitado = 0")->get_by_id($id);
        if(!$entity->exists())
        {
            show_404();
        }


        $entity->cliente->get();

        $entity->statuspedido->get();


        $this->response($this->generic_repository->to_array($entity), 200);
    }

    public function save_post()
    {
        $entity = new Pedido();
        $this->generic_repository->update_or_create($entity, json_decode($this->input->post('request'),true));
        $this->response($this->generic_repository->to_array($entity), 200);
    }

    public function delete_post($id)
    {
        $entity = new Pedido();
        $this->generic_repository->delete($entity, $id);
        $this->response("ok", 200);
    }
}