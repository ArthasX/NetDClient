Ext.define('NetDClient.store.TypeStore', {
    extend: 'NetDClient.store.BaseStore',
    alias: 'store.typeStore',
    id:'typeStore',
    path:'/devices/jointDeviceType',
    // model:'NetDClient.model.DeptMenu',
    proxy: {
        type: 'ajax',
        // url:URL.getURL(this.path),
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad:true,
    fields:['id','typename']
})