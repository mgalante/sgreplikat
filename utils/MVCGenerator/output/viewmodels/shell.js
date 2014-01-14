define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
				
				{ route: 'cliente/list', title:'Clientes', moduleId: 'viewmodels/cliente/list', nav: true },
                { route: 'cliente/edit/:id', title:'Editar Cliente', moduleId: 'viewmodels/cliente/edit', nav: false },
                { route: 'cliente/create', title:'Crear Cliente', moduleId: 'viewmodels/cliente/create', nav: false },
				
				{ route: 'ordendecompraitem/list', title:'Ordendecompraitems', moduleId: 'viewmodels/ordendecompraitem/list', nav: true },
                { route: 'ordendecompraitem/edit/:id', title:'Editar Ordendecompraitem', moduleId: 'viewmodels/ordendecompraitem/edit', nav: false },
                { route: 'ordendecompraitem/create', title:'Crear Ordendecompraitem', moduleId: 'viewmodels/ordendecompraitem/create', nav: false },
				
				{ route: 'ordendecompra/list', title:'Ordendecompras', moduleId: 'viewmodels/ordendecompra/list', nav: true },
                { route: 'ordendecompra/edit/:id', title:'Editar Ordendecompra', moduleId: 'viewmodels/ordendecompra/edit', nav: false },
                { route: 'ordendecompra/create', title:'Crear Ordendecompra', moduleId: 'viewmodels/ordendecompra/create', nav: false },
				
				{ route: 'pedidoitem/list', title:'Pedidoitems', moduleId: 'viewmodels/pedidoitem/list', nav: true },
                { route: 'pedidoitem/edit/:id', title:'Editar Pedidoitem', moduleId: 'viewmodels/pedidoitem/edit', nav: false },
                { route: 'pedidoitem/create', title:'Crear Pedidoitem', moduleId: 'viewmodels/pedidoitem/create', nav: false },
				
				{ route: 'pedido/list', title:'Pedidos', moduleId: 'viewmodels/pedido/list', nav: true },
                { route: 'pedido/edit/:id', title:'Editar Pedido', moduleId: 'viewmodels/pedido/edit', nav: false },
                { route: 'pedido/create', title:'Crear Pedido', moduleId: 'viewmodels/pedido/create', nav: false },
				
				{ route: 'pieza/list', title:'Piezas', moduleId: 'viewmodels/pieza/list', nav: true },
                { route: 'pieza/edit/:id', title:'Editar Pieza', moduleId: 'viewmodels/pieza/edit', nav: false },
                { route: 'pieza/create', title:'Crear Pieza', moduleId: 'viewmodels/pieza/create', nav: false },
				
				{ route: 'productopieza/list', title:'Productopiezas', moduleId: 'viewmodels/productopieza/list', nav: true },
                { route: 'productopieza/edit/:id', title:'Editar Productopieza', moduleId: 'viewmodels/productopieza/edit', nav: false },
                { route: 'productopieza/create', title:'Crear Productopieza', moduleId: 'viewmodels/productopieza/create', nav: false },
				
				{ route: 'producto/list', title:'Productos', moduleId: 'viewmodels/producto/list', nav: true },
                { route: 'producto/edit/:id', title:'Editar Producto', moduleId: 'viewmodels/producto/edit', nav: false },
                { route: 'producto/create', title:'Crear Producto', moduleId: 'viewmodels/producto/create', nav: false },
				
				{ route: 'proveedor/list', title:'Proveedores', moduleId: 'viewmodels/proveedor/list', nav: true },
                { route: 'proveedor/edit/:id', title:'Editar Proveedor', moduleId: 'viewmodels/proveedor/edit', nav: false },
                { route: 'proveedor/create', title:'Crear Proveedor', moduleId: 'viewmodels/proveedor/create', nav: false },
				
				{ route: 'proveedorpieza/list', title:'Proveedorpiezas', moduleId: 'viewmodels/proveedorpieza/list', nav: true },
                { route: 'proveedorpieza/edit/:id', title:'Editar Proveedorpieza', moduleId: 'viewmodels/proveedorpieza/edit', nav: false },
                { route: 'proveedorpieza/create', title:'Crear Proveedorpieza', moduleId: 'viewmodels/proveedorpieza/create', nav: false },
				
				{ route: 'statuspedido/list', title:'Statuspedidos', moduleId: 'viewmodels/statuspedido/list', nav: true },
                { route: 'statuspedido/edit/:id', title:'Editar Statuspedido', moduleId: 'viewmodels/statuspedido/edit', nav: false },
                { route: 'statuspedido/create', title:'Crear Statuspedido', moduleId: 'viewmodels/statuspedido/create', nav: false },
				
				{ route: 'statusproveedor/list', title:'Statusproveedores', moduleId: 'viewmodels/statusproveedor/list', nav: true },
                { route: 'statusproveedor/edit/:id', title:'Editar Statusproveedor', moduleId: 'viewmodels/statusproveedor/edit', nav: false },
                { route: 'statusproveedor/create', title:'Crear Statusproveedor', moduleId: 'viewmodels/statusproveedor/create', nav: false },
				
				{ route: 'statusproducto/list', title:'Statusproductos', moduleId: 'viewmodels/statusproducto/list', nav: true },
                { route: 'statusproducto/edit/:id', title:'Editar Statusproducto', moduleId: 'viewmodels/statusproducto/edit', nav: false },
                { route: 'statusproducto/create', title:'Crear Statusproducto', moduleId: 'viewmodels/statusproducto/create', nav: false },
				

            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});