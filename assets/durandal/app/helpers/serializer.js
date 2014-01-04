define(['plugins/serializer', 'models/proveedor', 'models/statusproveedor' ],function(serializer, Proveedor, Statusproveedor){
    serializer.typeMap.proveedor = Proveedor;
    serializer.typeMap.statusproveedor = Statusproveedor;
    return serializer;
});
