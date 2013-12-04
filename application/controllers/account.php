<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Account extends CI_Controller {

	public  function __construct()
    {
		parent::__construct();
        $this->load->database();
        $this->load->helper('url'); 
        $this->load->library('grocery_CRUD');    
	}
		
	public function index()
	{
		$this->load->view('login');
	}
	
	public function login(){
		if($_POST["password"] == "tambucho")
		{
			$this->session->set_userdata('loggedin',true);		
		}
		redirect(site_url("welcome/pedidos"));
	}
	
	public function logout()
	{
		$this->session->set_userdata('loggedin',false);
		redirect(site_url("welcome/pedidos"));
	}
}


/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */