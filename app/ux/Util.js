Ext.define('NetDClient.ux.Util',{
    statics:{
        rootURL: 'http://192.168.88.234:8081/netdevice',
        getURL: function (path) {
            return this.rootURL + path;
        },
        renderId2Name:function(s,disKey,valueKey){
            return function(value, cellmeta, record, rowIndex, columnIndex, store){
                 
                console.log("use ",s," for renderer")
                var items = s.data.items;
                var l = items.length;
                for (var i = 0; i < l; i++) {
                    if (value == items[i].get(disKey))
                        return items[i].get(valueKey);
                    else
                        continue;
                }
             return '数据有误';
            }
        }
    }
})