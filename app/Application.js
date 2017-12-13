/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

var PAGE_SIZE = 1000
function URL(rootURL) {
    this.rootURL='http://192.168.88.234:8099/netdevice',
    // rootURL:'',
    this.getURL= function (path) {
        return this.rootURL + path;
    }
}
 
var renderId2Name = function(s,disKey,valueKey){
    return function(value, cellmeta, record, rowIndex, columnIndex, store){
        // debugger;
        console.log("use ",s," for renderer")
        var items = s.data.items;
        var l = items.length;
        for (var i = 0; i < l; i++) {
            if (value == items[i].get(disKey))
                return items[i].get(valueKey);
            else
                continue;
        }
        return '';
    }
}

Ext.define('NetDClient.Application', {
    extend: 'Ext.app.Application',

    name: 'NetDClient',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [ 
        // TODO: add global / shared stores here
    ],
    views:['NetDClient.view.login.LoginForm'],
    launch: function () {
        debugger;   
          // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // // Check to see the current value of the localStorage key
        loggedIn = sessionStorage.getItem("isLogin");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        // debugger;
        // var s = Ext.create('NetDClient.store.DeptMenuStore');
        
        // var v = Ext.create({
        //     xtype:'deptMenu',
        //     // store:s,
             
        // })
        var v= Ext.create({
                xtype: loggedIn ? 'app-main' : 'login',
                // xtype:  'login'
                // xtype:  'app-main'
                // renderto:Ext.getBody()
            });
         
        if(loggedIn)
            v.render(Ext.getBody());
        
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
