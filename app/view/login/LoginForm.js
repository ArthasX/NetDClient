Ext.define('NetDClient.view.login.LoginForm',{
	extend:'Ext.window.Window',
	id:'login',
	xtype:'login',
	controller:'login',
	requires:['Ext.form.Panel','NetDClient.view.login.LoginController'],
	title:'网络设备管理系统',
	closable:false,
	resizable:false,
	autoShow:true,
	modal:true,
	items:[{
		xtype:'form',
		reference:'form',
		bodyPadding:20,
		items:[{
			xtype: 'textfield',
            name: 'account',
            labelWidth: 50,
            fieldLabel: '用户名',
            allowBlank: false,
            emptyText: '请输入账号'
		},{
			xtype: 'textfield',
            name: 'password',
            inputType:'password',
            labelWidth: 50,
            fieldLabel: '用户名',
            allowBlank: false,
            emptyText: '请输入密码',
            enableKeyEvents:true,
            scope:this,
            listeners:{
            	//监听回车
                specialkey:function(field,e){
                    if (e.getKey()==Ext.EventObject.ENTER){
                        //up 得到dom(window)
                        //lookupReference 得到component的引用
                        //触发自定义事件
                        this.up('window').lookupReference('loginbutton').fireEvent('click');
                        //this.up('window').lookupReference('loginbutton').click();
                    }
                }
            }
		}],
		buttons: [{
	        name: 'loginbutton',
	        text: '登 录',
	        glyph: 'xf110@FontAwesome',
	        region: 'center',
	        reference:'loginbutton',//通过lookupReference找到
	        listeners: { //监听事件
	            click: 'onLoginClick'//单击事件 调用LoginConroller.js中的onLoginbtnClick函数
	        }
	    }, {
	        name: 'registbutton',
	        text: '重 置',
	        glyph: 'xf118@FontAwesome',
	        listeners: {
	            click: 'onRest'//单击事件 调用LoginConroller.js中的onLoginbtnClick函数
	        }
	    }]
	}]
})