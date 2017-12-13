Ext.define('NetDClient.model.Dept', {
    extend: "Ext.data.Model",
    fields: [{
        name: "id",
        type: "auto"
    }, {
        name: 'deptId',
        type: 'auto'
    }, {
        name: 'name',
        type: 'auto'
    }],

    proxy: {
        type: 'rest',
        // url : URL.getURL("/devices/"),
        api: {
            // read: URL.getURL("/depts/"),
            // create: URL.getURL("/depts/"),
            // update: URL.getURL("/depts/"),
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
        this.set('id', record.id);
        this.set('deptId', record.deptId);
        this.set('name', record.name);
       
    }
})