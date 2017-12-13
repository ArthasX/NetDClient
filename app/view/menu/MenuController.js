Ext.define('NetDClient.view.menu.MenuController',{
	extend: 'Ext.app.ViewController',
    alias: 'controller.menu',

    onMenuSelected:function(me, record, index, eOpts ){
        debugger;
    	console.log("menu on selected ")
        console.log(me);
    	console.log(record);
    	console.log(index);
    	console.log(eOpts);
        var deptId = record.id;
        var title = record.data.text;
        //获取 device store
        var d =this.view.ownerCt.lookupReference('deviceList');
        //选中所有
        var s = d.store;

        var filters = s.getFilters();
        s.clearFilter();

        function idFilter(item){
            return item.get('deptId')==deptId;
        };
        //如果是根节点 只需要清除filter
        if(deptId!=9999&&deptId!='root'){
            d.setDeptId(deptId);
            d.setTitle(title+'网络设备');
            s.filterBy(idFilter);
        }else{
            d.setDeptId('');
            d.setTitle('网络设备');
        }
    },

})