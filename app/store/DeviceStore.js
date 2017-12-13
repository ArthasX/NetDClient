Ext.define('NetDClient.store.DeviceStore', {
    extend: 'NetDClient.store.BaseStore',
    alias: 'store.deviceStore',
    id: 'deviceStore',
    path: '/devices/',
    model: 'NetDClient.model.Device',
    proxy: {
        type: 'ajax',
        // url : 'http://localhost:8081/hacadaptor/devices/',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    // api: {
    //         read: URL.getURL("/menus/"),
    //     },
    // autoLoad : true
});

// fields:'',
