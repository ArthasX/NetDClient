Ext.define('NetDClient.store.BaseStore', {
    extend: 'Ext.data.Store',
    opt: 'update',
    /*
     用于 onEdit中判断是否是insert还是update ，由于使用的是rowediting，record的crudState
     一直是 update 所以 在这里设置变量opt 用于辅助判断
     */

    listeners: {
        'beforeload': function (store, operation, eOpts) {
            debugger;
            this.proxy.url = new URL().getURL(this.path);
            // this.proxy.headers={ "Accept": 'application/json', "Content-Type": 'application/json' };

        },
        'load':function(me, records, successful, operation, eOpts){
            //store读取以后的具体情况可以在这里判断
            //successful
            console.log(me);console.log(records)
            console.log(successful)
            console.log(operation)
            console.log(eOpts)
        }
    }
});

// fields:'',
