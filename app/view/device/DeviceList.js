Ext.define('NetDClient.view.device.DeviceList', {
    extend: 'Ext.grid.Panel',
    xtype: 'deviceList',
    // id: 'deviceList',
    name: 'device',// Ext.widget(name+'Edit') name+'Add'
    requires: ['NetDClient.store.DeviceStore', 'NetDClient.view.device.DeviceController'
    , 'NetDClient.store.PortStore','NetDClient.store.DeptStore','NetDClient.store.TypeStore'
    ,'NetDClient.view.device.PortDetail'],
    // requires: ['NetDClient.view.device.DeviceController'
    // ,'NetDClient.store.DeptStore','NetDClient.store.TypeStore'],
    store: {
        type: 'deviceStore'
    },
    // store:'deviceStore',
    controller: 'device',
    border: true,
    frame: true,// 渲染
    enableKeyNav: true,// 键盘控制
    columnLines: true,// 竖线
    height: window.screen.height - 200, //网页可见区域高 
    width: window.screen.width - 200,
    plugins: [
    {
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false,
        listeners: {
            edit: 'onEdit',
            canceledit: 'onCancelEdit'
        }
    },
    //port panel
    {

        ptype: 'rowwidget',
        widget: {
            xtype: 'gridpanel',
            height: 250,  
            autoLoad: true,
            bind: {
                deviceId: '{record.deviceid}',
                title: '网络设备[{record.deviceid}]端口情况'
            },
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
                text:'添加交换机端口',
                handler: 'onAddPortClick'
            }],
            columns: [{
                text: '端口号',
                dataIndex: 'portNum',
                width: '10%',
                editor:{
                    allowBlank:false,
                }
            }, {
                text:'端口状态',
                dataIndex:'portstatus',
                width:'10%',
                editor:{
                    allowBlank:false,
                }
            }
            ,{
                text: '地址',
                dataIndex: 'address',
                width: '20%',
                editor:{
                    // allowBlank:false,
                }
            },{
                text: 'MAC地址',
                dataIndex: 'mac',
                width: '10%',
                editor:{
                    // allowBlank:false,
                }
            }, {
                text: '接入设备类型',
                dataIndex: 'jointDeviceType',
                width: '20%',
                editor:{
                    xtype:'jointDeviceTypeCombo',
                    // allowBlank:false,
                },
                renderer: renderId2Name(Ext.create('NetDClient.store.TypeStore'),'id','typename'),
            }, {
                header: '操作人',
                dataIndex: 'optUser',
                width: '10%',
                 
            }, {
                header: '操作日期',
                dataIndex: 'optDate',
                width: '20%',
                
            }   
            ],

            deviceId:'',
            setDeviceId:function(deviceId){this.deviceId=deviceId},
            getDeviceId:function(){return this.deviceId},

                //增加一个portNum 属性，用于录入端口的时候 限制端口数量不能超过portNum 
                portNum:'',
                setPortNum:function(portNum){(this.portNum=portNum)},
                getPortNum:function(){return this.portNum},
            }
        }
         //port panel
     ],

        tbar: [{
            text: '刷新',
            handler: 'onRefreshClick'
        },{
            text:'添加交换机',
            handler: 'onAddClick'
        }],
        columns: [
        {
            header:"端口明细",
            xtype:'actioncolumn',
            items:[{
                tooltip:'点击打开明细页面',
                 // iconCls : 'icon-edit',
                icon:'resources/detail.png',
                // handler:function(grid,row,column){
                //     debugger;
                //     var rec = grid.getStore().getAt(row);
                //     var dId=rec.id;
                //     var win=Ext.create('NetDClient.view.device.PortDetail',{dId:dId});
                //     win.title="["+rec.id+"]号["+rec.data.name+"]端口情况";
                //     win.portNum=rec.data.portCount;
                //     win.show();
                // }
                handler:function(grid,row,column){
                    debugger;
                    var rec = grid.getStore().getAt(row);
                    var dId=rec.data.deviceid;
                    console.log(rec.data)
                    var win=Ext.create('NetDClient.view.device.PortDetail',{dId:dId});
                    win.title="网络设备["+dId+"]端口情况";
                    win.portNum=rec.data.portCount;
                    win.show();
                }
            }],
            width:'8%'
        },
        {
            header: '编号',
            dataIndex: 'deviceid',
            width: '10%',
            editor:{
                allowBlank:false,
            }
        // }, {
        //     header: '类型',
        //     dataIndex: 'deviceType',
        //     width: '10%',
        //     editor:{
        //         allowBlank:true,
        //     }
        // }, {
        //     header: '名称',
        //     dataIndex: 'name',
        //     width: '10%',
        //     editor:{
        //         allowBlank:true,
        //     }
        }, {
            header: '地址',
            dataIndex: 'address',
            width: '10%',
            editor:{
                allowBlank:false,
            }
        }, {
            header: '机构名称',
            dataIndex: 'deptId',
            width: '20%',
            editor:{
                allowBlank:false,
                xtype:'deptCombo',
            },
            renderer: renderId2Name(Ext.create('NetDClient.store.DeptStore'),'deptId','name'),
        
    }
    // ,{
    //     header: '品牌',
    //     dataIndex: 'brand',
    //     width: '10%',
    //     editor:{
    //         allowBlank:false,
    //     }        
    // }
    , {
        header: '端口数量',
        dataIndex: 'portCount',
        width: '10%',
        editor:{
            allowBlank:false,
        }
    }, {
        xtype:'datecolumn',
        format: "Y-m-d",
        header: '接入日期',
        dataIndex: 'joinDate',
        width: '10%',
        editor:{
            xtype:'datefield',
            emptyText: "--请选择--",
            format: "Y-m-d",
            maxValue : Ext.Date.format(new Date(), 'Y-m-d'),
            allowBlank:false,
        }
    }, {
        header: '操作人',
        dataIndex: 'optUser',
        width: '10%',
        
    }, {
        header: '操作日期',
        dataIndex: 'optDate',
        width: '10%',
         
    }],
    viewConfig: {listeners: {expandbody: 'onExpandbody'}},
    listeners: {
        // select: 'onItemSelected',
        afterrender: 'afterrender',

    },

    deptId:'',
    setDeptId:function(deptId){this.deptId=deptId},
    getDeptId:function(){return this.deptId},
     
});
