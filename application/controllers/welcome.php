<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public  function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->helper('url'); 
        $this->load->library('grocery_CRUD');    
	    if(!$this->session->userdata('loggedin')){
			redirect(site_url('account'));
		}
        log_message('debug', "test");
	}
	
	public function index()
	{
		redirect(site_url("welcome/pedidos"));
	}
	
	public function _example_output($output = null)
    {
        $this->load->view('example.php',$output);    
    }
	
	public function clientes()
	{
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		$crud->set_theme('datatables');
		$crud->set_table('clientes');
		$crud->add_action('Pedidos', '', '', 'ui-icon-plus',array($this,'cliente_pedidos_link'));
		$output = $crud->render();
		$this->_example_output($output);
	}
	
	public function cliente_pedidos_link($primary_key, $row)
	{
		return site_url('welcome/pedidos/'. $row->id);
	}

	public function pedidos($cliente_id=0)
	{	
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		$crud->set_table('pedidos');
        if($cliente_id > 0)
        {
            $crud->where('cliente_id = ',$cliente_id);
            $crud->field_type('cliente_id', 'hidden', $cliente_id);
        }
        else
        {
		    $crud->display_as("cliente_id", "Cliente");
            $crud->set_relation('cliente_id','clientes','{nombre} {apellido}');
        }
        $crud->display_as("statuspedido_id", "Pedido");
        $crud->set_relation('statuspedido_id','statuspedidos','{descripcion}');

		$state = $crud->getState();

        log_message('debug', "state: $state");

		$crud->add_action('Items de Pedido', '', '', 'ui-icon-plus',array($this,'pedido_detalle_link'));
		$output = $crud->render();
		$this->_example_output($output);
	}
	
	public function pedido_detalle_link($primary_key, $row)
	{
		return site_url('welcome/pedidoitems/'. $row->id);
	}
	
	function pedidoitems($pedido_id)
	{
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		$crud->set_table('pedidoitems');
		$crud->set_relation('producto_id','productos','descripcion');
		$crud->where('pedido_id = ',$pedido_id);
		$crud->field_type('pedido_id', 'hidden', $pedido_id);			
		$output = $crud->render();
		$this->_example_output($output);
	}


	function productos()
	{
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		$crud->set_table('productos');
		$crud->add_action('Pieza del Producto', '', '', 'ui-icon-plus',array($this,'productopiezas_link'));
        $crud->set_relation('statusproducto_id','statusproductos','{descripcion}');
        $output = $crud->render();
		$this->_example_output($output);
	}

	public function productopiezas_link($primary_key, $row)
	{
		return site_url('welcome/productopiezas/'. $row->id);
	}
	
	public function productopiezas($producto_id)
	{
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		$crud->set_table('productopiezas');
		$crud->where('producto_id = ',$producto_id);
		$crud->field_type('producto_id', 'hidden', $producto_id);
		$crud->set_relation('pieza_id','piezas','SKU{sku} {descripcion}');
        $crud->display_as("pieza_id", "Pieza");

        $crud->set_relation('producto_id','productos',' SKU{sku} {descripcion}');
        $crud->display_as("producto_id", "Producto");

		$output = $crud->render();
		$this->_example_output($output);
	}

	public function piezas()
	{
		$crud = new grocery_CRUD();
		$crud->set_theme('datatables');
		$crud->set_table('piezas');
		$output = $crud->render();		
		$this->_example_output($output);
	}

    function proveedores()
    {
        $crud = new grocery_CRUD();
        $crud->set_theme('datatables');
        $crud->set_table('proveedores');
        $crud->add_action('Ver piezas', '', '', 'ui-icon-plus',array($this,'proveedorpiezas_link'));
        $output = $crud->render();
        $this->_example_output($output);
    }

    public function proveedorpiezas_link($primary_key, $row)
    {
        return site_url('welcome/proveedorpiezas/'. $row->id);
    }

    public function proveedorpiezas($proveedor_id)
    {
        $crud = new grocery_CRUD();
        $crud->set_theme('datatables');
        $crud->set_table('proveedorpiezas');
        $crud->where('proveedor_id = ',$proveedor_id);
        $crud->field_type('proveedor_id', 'hidden', $proveedor_id);
        $crud->set_relation('pieza_id','piezas','descripcion');
        $output = $crud->render();
        $this->_example_output($output);
    }





    public function statusproductos()
    {
        $crud = new grocery_CRUD();
        $crud->set_theme('datatables');
        $crud->set_table('statusproductos');
        $output = $crud->render();
        $this->_example_output($output);
    }

    public function statuspedidos()
    {
        $crud = new grocery_CRUD();
        $crud->set_theme('datatables');
        $crud->set_table('statuspedidos');
        $output = $crud->render();
        $this->_example_output($output);
    }


}


/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */