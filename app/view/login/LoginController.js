Ext.define('NetDClient.view.login.LoginController',{
	extend:'Ext.app.ViewController',
	alias:'controller.login',
	onLoginClick:function(){
		// var me=this;
		// debugger;
		// localStorage.setItem('isLogin',true),
		// me.getView().destroy();
		// Ext.create({
		// 	xtype:'app-main'
		// })
		// var s = Ext.create('NetDClient.store.DeptMenuStore');
		// s.load();
		this.login();	
	},
	onRest:function(){
		var form=this.getView().lookupReference('form').getForm();
		form.reset();
	},

	login:function(){
		// debugger;
		var me=this;
		var  form = me.getView().lookupReference('form').getForm();
		var  values=form.getFieldValues();
		Ext.Ajax.request({
			url:new URL().getURL("/login/"),
			params:values,
			success:function(response,opts){
				debugger;
				var result=Ext.JSON.decode(response.responseText);
				if(result.success){
					sessionStorage.setItem('isLogin',true);
					sessionStorage.setItem('userToken',JSON.stringify(result.data)); 
					//me是login controller 不是最下面的导致了无法对最render list view
					me.getView().destroy();
					var v=Ext.create({
						xtype:'app-main',
						userName:result.data.user.userName,						
					});
					v.render(Ext.getBody());
					 // renderto:Ext.getBody()
				}else{
					Ext.Msg.alert('Message','登录失败,账号密码有误');
				}
			},

			failure:function(response,opts){
				Ext.Msg.alert('Message','登录失败,可能原因:超时或服务器无响应');
			}

		})
	}
})