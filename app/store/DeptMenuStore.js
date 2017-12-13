Ext.define('NetDClient.store.DeptMenuStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.deptMenuStore',
    path:'/menus/',
    proxy: {
        type: 'ajax',
        // url:new URL().getURL(this.path),
        reader: {
            type: 'json',
            rootProperty: 'data.children'
        }
    },
    // autoLoad:true,
    listeners: {
        'beforeload': function (store, operation, eOpts) {
            console.log("before menu store load....",this.proxy.url)
            this.proxy.url=new URL().getURL(this.path);
            console.log("set proxy to ",this.proxy.type);
        },
        'load':function(me, records, successful, operation, eOpts){
            debugger;
            console.log("after menu store load....")
            console.log(me);console.log(records)
            console.log(successful)
            console.log(operation)
            console.log(eOpts)
        } 
         
    }
})