define(['plugins/serializer', 'viewmodels/proveedor/proveedor' ],function(serializer, Proveedor){
    serializer.typeMap.proveedor = Proveedor;
    return serializer;
});
