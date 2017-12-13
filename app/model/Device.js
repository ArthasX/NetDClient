Ext.define("NetDClient.model.Device", {
    extend: "Ext.data.Model",
    fields: [{
        name: "id",
        type: "string"
    },{
        name: "deviceid",
        type: "string"
    }, {
        name: 'deviceType',
        type: 'auto'
    }, {
        name: 'name',
        type: 'auto'
    }, {
        name: 'address',
        type: 'auto'
    }, {
        name: 'deptId',
        type: 'auto',
    }, {
        name: 'brand',
        type: 'auto',
    }, {
        name: 'portCount',
        type: 'auto',
    }, {
        name: 'joinDate',
        type: 'auto',
        convert:function(value){  
            var createTime = Ext.Date.format(new Date(value),"Y-m-d");
            return createTime;  
         } 
    },{
            name:'optDate',
            type:'string'
        },{
            name:'optUser',
            type:'auto'
        }],


    hasMany:'NetDClient.model.Port',

    appendId:false,
    proxy: {
        type: 'rest',
        // url : URL.getURL("/devices/"),
        api: {
            read: new URL().getURL("/devices/"),
            create: new URL().getURL("/devices/"),
            update: new URL().getURL("/devices/"),
        },
        actionMethods: {
            create: 'POST',
            update: 'PUT',
            read: 'GET',
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
        }
    },

    initModel: function (record) {
        this.set('id',record.id);
        this.set('deviceid', record.deviceid);
        this.set('name', record.name);
        this.set('address', record.address);
        this.set('deptId', record.deptId);
        this.set('brand', record.brand);
        this.set('portCount', record.portCount);
        this.set('joinDate', record.joinDate);
        this.set('deviceType', record.deviceType);
        this.set('optUser',JSON.parse(sessionStorage.getItem('userToken')).user.userName);
    }
});
