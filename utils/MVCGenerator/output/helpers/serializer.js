define([
'plugins/serializer'
,'models/cliente','models/ordendecompraitem','models/ordendecompra','models/pedidoitem','models/pedido','models/pieza','models/productopieza','models/producto','models/proveedor','models/proveedorpieza','models/statuspedido','models/statusproveedor','models/statusproducto'
]
,function(serializer
,cliente,ordendecompraitem,ordendecompra,pedidoitem,pedido,pieza,productopieza,producto,proveedor,proveedorpieza,statuspedido,statusproveedor,statusproducto){
    
    serializer.typeMap.cliente = cliente;
    
    serializer.typeMap.ordendecompraitem = ordendecompraitem;
    
    serializer.typeMap.ordendecompra = ordendecompra;
    
    serializer.typeMap.pedidoitem = pedidoitem;
    
    serializer.typeMap.pedido = pedido;
    
    serializer.typeMap.pieza = pieza;
    
    serializer.typeMap.productopieza = productopieza;
    
    serializer.typeMap.producto = producto;
    
    serializer.typeMap.proveedor = proveedor;
    
    serializer.typeMap.proveedorpieza = proveedorpieza;
    
    serializer.typeMap.statuspedido = statuspedido;
    
    serializer.typeMap.statusproveedor = statusproveedor;
    
    serializer.typeMap.statusproducto = statusproducto;
    
    return serializer;
});
