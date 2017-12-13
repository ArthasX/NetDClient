Ext.define('NetDClient.model.DeptMenu', {
    extend: "Ext.data.TreeModel",
       fields: [{
        name: "id",
        type: "auto"
    }, {
        name: 'text',
        type: 'auto'
    }, {
        name: 'leaf',
        type: 'auto'
    },{
        name:'children',
        type:'auto'
    }]
})