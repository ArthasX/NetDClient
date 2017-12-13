/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('NetDClient.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    data: {
        name: '网络设备管理',
        // userName:typeof(this.userToken)=='undefined'?'':this.userToken.user.userName,
        userToken:JSON.parse(sessionStorage.getItem('userToken')),
        },
    formulas: {  
        userName: function (get) {  
            var token = get('userToken');
            console.log('[',this.alias,']',token);
            return  token==null ? '':token.user.userName;  
        }  
    }  
    //TODO - add data, formulas and/or methods to support your view
});
