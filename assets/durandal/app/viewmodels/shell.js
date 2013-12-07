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
                { route: 'test', title:'Test', moduleId: 'viewmodels/test', nav: true },
                { route: 'proveedor/list', title:'Proveedores', moduleId: 'viewmodels/proveedor/list', nav: true },
                { route: 'proveedor/edit/:id', title:'Proveedores', moduleId: 'viewmodels/proveedor/edit', nav: false },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true }

            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});