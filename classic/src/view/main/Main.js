/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NetDClient.view.main.Main', {
    // extend: 'Ext.tab.Panel',
    extend: 'Ext.panel.Panel',
    layout: 'border',
    bodyBorder: false,
    // id:'app-main',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'NetDClient.view.main.MainController',
        'NetDClient.view.main.MainModel',
        'NetDClient.view.device.DeviceList',
        'NetDClient.view.menu.Menu',
        // 'NetDClient.model.*'
        // 'NetDClient.store.JointDeviceTypeStore'
        // 'NetDClient.view.menu.MenuViewModel'
    ],

    controller: 'main',
    viewModel:'main',

    ui: 'navigation',

    height:window.innerHeight,
    items: [{
                region: 'north',
                border: false,
                margins: '0 0 5 0',
                layout: {
                    type: 'hbox',
                },
                items:[{
                    html: '<h1 class="x-panel-header">网络设备管理</h1>',
                    width:'50%',
                }, {
                    width:'25%'
                },{
                    xtype:'panel',
                    layout: {
                            type: 'hbox',
                            pack: 'end',  
                            align: 'bottom'
                    },
                    tbar:["->",{text:'注销',handler:'logout'}],
                    items:[{
                        html:'welcome,',reference:'testHTML'
                    },{
                        // html:this.userName,
                        
                        // bind:{html:'{userName}'},
                        reference:'userNameHTML'
                    }],
                    width:'25%',
                }]
        }, 
        {
            title: '菜单',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 200,
            layout: 'fit',
            collapsible: true,
            split: true,
            bodyPadding: 10,
            xtype:'deptMenu',
            reference:'deptMenu',
        },
         {
            title: '网络设备',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            // items:[{xtype:'deviceList'}]
            xtype:'deviceList',
            reference:'deviceList',
   
    }],
    listeners:{
        afterrender:'setUserName'
    }
});
