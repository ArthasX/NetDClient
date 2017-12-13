Ext.define('NetDClient.view.device.PortDetail', {
    extend: 'Ext.window.Window',
    height: window.screen.height - 200, //网页可见区域高 
    width: window.screen.width - 500,
    dId: '',

    controller: 'device',
    items:[{ 
         xtype: 'gridpanel',
         height: window.screen.height-250,  
    // autoLoad: true,
    // bind: {
    //     deviceId: '{record.id}',
    //     title: '[{record.id}]号[{record.name}]端口情况'
    // },
    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false,
        listeners: {
            edit: 'onEdit',
            canceledit: 'onCancelEdit'
        }
    }],
    tbar: [{
        text: '刷新',
        handler: 'onRefreshClick'
    },
        {
            text: '添加交换机端口',
            handler: 'onAddPortClick'
        }],
    columns: [{
        text: '端口号',
        dataIndex: 'portNum',
        width: '10%',
        editor: {
            allowBlank: false,
        }
    }, {
        text: '地址',
        dataIndex: 'address',
        width: '20%',
        editor: {
            // allowBlank: false,
        }
    }, 
    {
                text: 'MAC地址',
                dataIndex: 'mac',
                width: '20%',
                editor:{
                    // allowBlank:false,
                }
    }, 
    {
        text: '接入设备类型',
        dataIndex: 'jointDeviceType',
        width: '20%',
        editor: {
            xtype: 'jointDeviceTypeCombo',
            // allowBlank: false,
        },
        renderer: renderId2Name(Ext.create('NetDClient.store.TypeStore'), 'id', 'typename'),
    }, {
        header: '操作人',
        dataIndex: 'optUser',
        width: '10%',

    }, {
        header: '操作日期',
        dataIndex: 'optDate',
        width: '20%',

    }],

    deviceId: '',
    setDeviceId: function (deviceId) {
        this.deviceId = deviceId
    },
    getDeviceId: function () {
        return this.deviceId
    },

    //增加一个portNum 属性，用于录入端口的时候 限制端口数量不能超过portNum 
    portNum: '',
    setPortNum: function (portNum) {
        (this.portNum = portNum)
    },
    getPortNum: function () {
        return this.portNum
    },
    }],
    listeners:{
        show: 'afterDetailWindowShow'
    },

    models:null,
    setModels:function(models){
        this.models=models;
    },
    getModels:function(){
        return this.models;
    }
    
})