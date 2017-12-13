/**
 * This class is the controller for the main view for the application. It is specified as
 * the 'controller' of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 
Ext.define('NetDClient.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        // debugger;
        console.log(record);
        Ext.Msg.confirm('Confirm1111', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    afterrender: function (panel, eOpts) {
        console.log(panel);
        panel.store.load();
        return true;
    },

    updateGroupIdByDevice: function (sender, record) {
        console.log('updateGroupIdByDevice');
    },

    onAddClick: function (sender, e,id) {
        debugger;
        var btn = sender;
        var view = btn.ownerCt.ownerCt;
        var store = view.store;
        var model = store.model;
        var deptId = view.getDeptId();
        if(deptId=='')
        {
            Ext.Msg.alert('注意','请选中一家分支机构');
            return;
        }
        var rec;
        console.log(store);
        
        var idd=id||'';
        rec=model.create({});
        rec.set('id',idd);
        rec.set('deptId',deptId);
        rec.set('optUser',JSON.parse(sessionStorage.getItem('userToken')).user.userName);
        rec.crudState = 'C';
        store.insert(0, rec);
        console.log('set store opt to insert')
        store.opt = 'insert';
        view.findPlugin('rowediting').startEdit(rec, 0);
    },

    onAddPortClick:function(sender,e,id){
        debugger;
        var btn = sender;
        var view = btn.ownerCt.ownerCt;//device的view
        var store = view.store;
        var model = store.model;
        console.log(store);
        // var id = store.data.items[store.data.length - 1].data.id + 1;
        var rec=model.create({});
        var idd=id||'';
        rec=model.create({});
        rec.set('id',idd);
        var netDeviceId=view.getDeviceId();
        rec.set('netDeviceId',netDeviceId);
        rec.set('optUser',JSON.parse(sessionStorage.getItem('userToken')).user.userName);
        rec.crudState = 'C';
        store.insert(0, rec);
        console.log('set store opt to insert')
        store.opt = 'insert';
        view.findPlugin('rowediting').startEdit(rec, 0);
    },

    onEdit: function (editor, e) {
        console.log('======rowediting======')
        console.log(editor);
        console.log(e);
        debugger;
        var store = editor.grid.store;
        var model;
        if (store.opt == 'insert') {
            model = store.first();
            // model.initModel(e.record.data)
        }
        else {
            model = store.model.create(e.record);
            model.initModel(e.record.data)
            console.log(model)
        }
        
        // model.set('userId',e.record.data.userId);
        // var model=editor.grid.store.model.create({
        //     id:'141',
        //     groupName:'12345'
        // });
        model.save({
            failure: function (record, operation) {
                // do something if the save failed
                console.log('----failure function-start---')
                var m = Ext.JSON.decode(operation.getResponse().responseText).message+'\n录入数据有误';
                if(m.indexOf('DuplicateKeyException')!=-1)
                   m='注意同一个设备下端口号不能重复,注意录入数据的准确性';
                Ext.toast(m, 'Message');
                console.log('----failure function-end---');
            },
            success: function (record, operation) {
                // Ext.JSON.decode(operation.getResponse().responseText).message
                console.log('----success function-start---')
                Ext.toast('更新成功           '
                    , 'Message');
                console.log('----success function-end---')
            },
            callback: function (record, operation, success) {
                // do something whether the save succeeded or failed
                console.log('----callback function-start---')
                store.reload();
                
                console.log('----callback function-end---')
            }
        });
        console.log('set store opt back to update')
        store.opt = 'update';
    },

    onCancelEdit: function (editor, context, eOpts) {
        console.log('cancel update or insert,set store opt back to update');
        var store = editor.grid.store;
        if(store.opt=='insert')
            store.removeAt(0);
        store.opt = 'update';
        console.log('remove the No.0 record');
    },

    onRefreshClick: function (view, recIndex, cellIndex, item, e, record) {
        console.log('===onRefreshClick===refresh');
        // var view = this.getView();
        var grid = view.ownerCt.ownerCt;
        var store = grid.store;
        store.reload();
        debugger;
        console.log('===refreshed===store', store);
    },

    logout:function(){
        console.log('logout');
        var me = this;
        Ext.Msg.confirm('提示','确认退出？',function(p){
            if(p=='yes'){
                me.removeSessionStorage(me);
            }
        })
    },

    removeSessionStorage:function(me){
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('isLogin');
        me.getView().destroy();
        location.reload();
    },

    setUserName:function(me,eOpts){
        var userName=JSON.parse(sessionStorage.getItem('userToken')).user.userName;
        console.log('[set user name] to ',userName);
        var u=me.lookupReference('userNameHTML');
        u.setHtml(userName);
        debugger;
        console.log(u);
    }
});
