Ext.define('NetDClient.store.TestMenu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.testMenu',
    root: {      
                expanded: true,
                children: [{
                    text: '机构',
                    iconCls: 'x-fa fa-home',
                    expanded: true,
                    children: [{
                        text: '机构1',
                        // iconCls: 'x-fa fa-inbox',
                        // leaf: true,
                        children: [{
                            text: '机构11',
                            // iconCls: 'x-fa fa-inbox',
                            leaf: true
                        }]
                    }, {
                        text: '机构2',
                        // iconCls: 'x-fa fa-music',
                        leaf: true
                    },{
                        text: '机构2',
                        // iconCls: 'x-fa fa-film',
                        leaf: true
                    }]
                },{
                    text: 'Settings',
                    iconCls: 'x-fa fa-wrench',
                    children: [{
                        text: '机构管理',
                        iconCls: 'x-fa fa-home',
                        leaf: true
                    },{
                        text: '账户管理',
                        iconCls: 'x-fa fa-user',
                        leaf: true
                    }]
                }]
            }
})