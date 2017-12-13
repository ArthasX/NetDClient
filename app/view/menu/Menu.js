Ext.define('NetDClient.view.menu.Menu',{
	// extend:'Ext.list.Tree',
     extend: 'Ext.tree.Panel',
     xtype:'deptMenu',

     rootVisible : true, 
     scrollable:true,
     animate:true,
     root:{text:'分支机构'},
    	requires:['NetDClient.store.DeptMenuStore','NetDClient.view.menu.MenuController',
    	'NetDClient.store.TestMenu','NetDClient.view.menu.MenuViewModel'],
    	// store: {type:'deptMenuStore',reference:'deptMenuStore'},
    	store:Ext.create("NetDClient.store.DeptMenuStore"),
      controller:'menu',
    	viewModel:'treelist',

     
    	listeners: {
            select: 'onMenuSelected',
            // select:function(){
            //   console.log(123)
            // }
        }
   
})

