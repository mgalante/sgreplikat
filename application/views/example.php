<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
<?php 
foreach($css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>
<?php foreach($js_files as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
<style type='text/css'>
body
{
	font-family: Arial;
	font-size: 14px;
}
a {
    color: blue;
    text-decoration: none;
    font-size: 14px;
}
a:hover
{
	text-decoration: underline;
}
</style>
</head>
<body>
	<div>
		<a href='<?php echo site_url('welcome/clientes')?>'>Clientes</a> |
		<a href='<?php echo site_url('welcome/pedidos')?>'>Pedidos</a> |
		<a href='<?php echo site_url('welcome/productos')?>'>Productos</a> |
		<a href='<?php echo site_url('welcome/piezas')?>'>Piezas</a>  |
        <a href='<?php echo site_url('welcome/piezas')?>'>Proveedores</a>  |
        <a href='<?php echo site_url('welcome/statuspedidos')?>'>Estados Pedidos</a>  |
        <a href='<?php echo site_url('welcome/statusproductos')?>'>Estados Productos</a>  |
        <a href='<?php echo site_url('account/logout')?>' style="color: red">Salir</a>
	</div>
	<div style='height:20px;'></div>  
    <div>
		<?php echo $output; ?>
    </div>
</body>
</html>
