Ext.define('NetDClient.store.DeptStore', {
    extend: 'NetDClient.store.BaseStore',
    alias: 'store.deptStore',
    id: 'deptStore',
    path: '/depts/',
    model: 'NetDClient.model.Dept',
    proxy: {
        type: 'ajax',
        // url : 'http://localhost:8081/hacadaptor/depts/',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad : true
});
 