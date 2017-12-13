Ext.define('NetDClient.store.PortStore', {
    alias: 'store.portStore',
    id: 'portStore',
    path: '/devices/id/ports/',
    extend: 'NetDClient.store.BaseStore',
    model: 'NetDClient.model.Port',
    proxy: {
        type: 'ajax',
        // url : 'http://localhost:8081/hacadaptor/devices/',
      
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    deviceId:'',
    listeners: {
        'beforeload': function (store, operation, eOpts) {
            // debugger;
            // var grid = store.up('grid');
            // console.log("grid:",grid);
            var url=new URL().getURL(this.path);
            this.proxy.url =url.replace('id',this.deviceId);
        }
    }
});

// fields:'',
