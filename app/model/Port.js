Ext.define('NetDClient.model.Port', {
    extend: "Ext.data.Model",
    fields: [
        {
            name: "netDeviceId",
            type: "auto"
        }, {
            name: 'id',
            type: 'auto'
        }, {
            name: 'portNum',
            type: 'auto'
        }, {
            name:'portstatus',
            type:'auto'
        },{
            name: 'address',
            type: 'auto'
        },{
            name: 'mac',
            type: 'auto'
        }, {
            name: 'jointDeviceType',
            type: 'auto',
        }, {
            name: 'deviceId',
            reference:'Device'
        },{
            name:'optDate',
            type:'string'
        },{
            name:'optUser',
            type:'auto'
        }],
    // belongsTo: 'NetDClient.model.Device',
    appendId:false,
    proxy: {
        type: 'rest',
        // url : new URL().getURL("/devices/"),
        api: {
            read: new URL().getURL("/ports/"),
            create: new URL().getURL("/ports/"),
            update: new URL().getURL("/ports/"),
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
        // this.set('id', record.id);
        this.set('netDeviceId', record.netDeviceId);
        this.set('address', record.address);
        this.set('mac', record.mac);
        this.set('portNum', record.portNum);
        this.set('portstatus', record.portstatus);
        this.set('jointDeviceType', record.jointDeviceType);
        this.set('optUser',JSON.parse(sessionStorage.getItem('userToken')).user.userName);
         
    }
})