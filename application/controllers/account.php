<?php
require(APPPATH.'libraries/REST_Controller.php');

class Account extends REST_Controller{

    public function __construct()
    {
        parent::__construct();
     /*   if(!$this->session->userdata('loggedin'))
        {
            
            //redirect(site_url('account'));
        }*/
    }

    public function login_post()
    {
        $user = $this->input->post('user');
        $password = $this->input->post('password');
        if(
            ($user == "miguel" && $password == "1234") ||
            ($user == "santiago" && $password == "tambucho")
        )
        {
            $this->session->set_userdata('loggedin',true);
            $this->response("Ok",200);
            exit();
        }

        $this->response("ERROR",401);
    }

    public function logout_post()
    {
        $this->session->set_userdata('loggedin',false);
        $this->response("Ok",200);
    }
}