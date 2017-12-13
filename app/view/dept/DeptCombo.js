Ext.define('NetDClient.view.dept.DeptCombo',{
			extend: 'Ext.form.field.ComboBox',
            requires:['NetDClient.store.DeptStore'],
			xtype:'deptCombo',
            typeAhead: true,
            triggerAction: 'all',
            displayField: 'name',
            valueField: 'deptId',
            store: {type: 'deptStore'},
            editable: true,
            listeners: {
                beforequery: function (e) {
                    var combo = e.combo;
                    if (!e.forceAll) {
                        var value = e.query;
                        // debugger;
                        combo.store.filters.removeAll();
                        combo.store.filterBy(function (record, id) {
                            var text = record.get(combo.displayField);
                            return (text.indexOf(value) != -1);
                        });
                        combo.expand();
                        return false;
                    }
                }
                //          ,
                // action:function(combo,e,eOpts){
                //              console.log("this",combo)
                //              console.log("e",e)
                //              console.log("eOpts",eOpts)
                //          }
            }
})