Ext.define('NetDClient.view.device.DeviceController', {
    extend: 'NetDClient.view.main.MainController',
    alias: 'controller.device',

    // afterrender:function(panel,eOpts){
    //        console.log(panel);
    //        panel.store.load();
    //        return true;
    //    },

    afterDetailWindowShow:function(win,f){
        debugger;
        var grid = win.down('gridpanel');
        var portNum=win.portNum;
        
        var models = win.getModels();
        if(models==null)
            models=new Array();
        //初始化弹出窗口的store
        grid.setDeviceId(win.dId);
        var store = new NetDClient.store.PortStore(
            // {listeners:{
            //     load:function(records, options, success){
            //         debugger;
            //         for(var i=0;i<portNum;i++){
            //             var model=store.model.create();
            //             model.crudState = 'C';
            //             model.set('id','');
            //             model.set('portNum', i+1);
            //             model.phantom = false;
            //             models[i]=model;
            //         }        
            //         for(var j=0;j<records.length;j++){
            //             var rec=records[j];
            //             rec.crudState = 'U';
            //             models[rec.data.portNum]=rec;
            //         }
            //         store.data.items=models;
            //     }
            // }
        // }
        ); 
        store.deviceId=win.dId;
         
        grid.setStore(store);
        store.load(
        // {
        //     callback:function(records, options, success){
        // //初始化model数组，先遍历初始化所有model都为空(a条)，再遍历store里面的数据（b条)，将两个model数据合并
        // //最后在放入store中，得到的a个model，其中有b个model是有数据的  
        //         debugger;
        //         for(var i=0;i<portNum;i++){
        //             var model=store.model.create();
        //             model.crudState = 'C';
        //             model.set('id','');
        //             model.set('portNum', i+1);
        //             model.phantom = false;
        //             models[i]=model;
        //         }        
        //         for(var j=0;j<records.length;j++){
        //             var rec=records[j];
        //             rec.crudState = 'U';
        //             models[rec.data.portNum]=rec;
        //         }
        //         store.data.items=models;
        //     }
        // }
        );
      
        return store;
    },
    onExpandbody: function (rowNode, record, expandRow, eOpts) {
        console.log(rowNode);
        console.log(record)
        console.log(expandRow)
        console.log(eOpts)
        var store = new NetDClient.store.PortStore(); 
        store.deviceId=record.data.deviceid;
        eOpts.setStore(store);
        eOpts.store.load();
        return store;
    },

    onUpdateClick: function (view, recIndex, cellIndex, item, e, record) {
        debugger;
        console.log("===onUpdateClick===")
        console.log(view);
        console.log(recIndex);
        console.log(cellIndex);
        console.log(item);
        console.log(e);
        console.log(record);
        console.log("===onUpdateClick===")
        var device = Ext.create('NetDClient.model.Device');
        var groupName = record.get('groupId');
        record.data.groupId = groupName2Id(groupName);
        device.initModel(record.data)
        var groupId = device.get('groupId')
        if (groupId < 0 || groupId == null) {
            Ext.toast("系统分组groupId有误", "ERROR");
            return
        }
        device.save({
            failure: function (record, operation) {
                // do something if the save failed
                console.log(record)
                console.log('failure')
            },
            success: function (record, operation) {
                // do something if the save succeeded
                view.store.load();
                Ext.toast('设备名:' + record.data.deviceName + '-设置组：' + groupName, 'Data saved');
                console.log('success')
            },
            callback: function (record, operation, success) {
                // do something whether the save succeeded or failed
                console.log('callback')
            }
        });
    },


    changeDock: function (button, checked) {
        if (checked) {
            this.getView().getConfigurator().setDock(button.text.toLowerCase());
        }
    },

    monthLabelRenderer: function (v) {
        return Ext.Date.monthNames[v];
    },

    onRefreshData: function () {
        var me = this,
            heatmap = me.lookupReference('heatmap'),
            store = heatmap.getMatrix().store;

        store.refreshRandomData(100);
    },

    // onBeforeAddConfigField: function (panel, config) {
    //     var dest = config.toContainer;

    //     if (dest.getFieldType() !== 'all' && dest.items.getCount() >= 1) {
    //         // this will force single fields on both axis and aggregate
    //         dest.removeAll();
    //     }
    // },

    // onShowFieldSettings: function (panel, config) {
    //     var align = config.container.down('[name=align]');
    //     // hide the alignment field in settings since it's useless
    //     if (align) {
    //         align.hide();
    //     }
    // },

    // onTooltip: function (component, tooltip, datum, element, event) {
    //     var d = datum.data,
    //         x = component.getXAxis().getField(),
    //         y = component.getYAxis().getField(),
    //         z = component.getColorAxis().getField();

    //     tooltip.setHtml(
    //         '<div>X: ' + d[x] + '</div>' +
    //         '<div>Y: ' + d[y] + '</div>' +
    //         '<div>Z: ' + d[z] + '</div>' +
    //         '<div>Records: ' + d.records + '</div>'
    //     );
    // }

})