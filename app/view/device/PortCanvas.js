Ext.define('NetDClient.view.device.PortCanvas',{
	extend:'Ext.window.Window',
	height: window.screen.height - 200, //网页可见区域高 
    width: window.screen.width - 500,
    tbar:[{
    	text:'click me ',
		handler:function(){
			alert('111')
		}
    }],
	items:[{
		html:'<table><tr><th>thhhh1</th><th>thhhh2</th></tr> <tr><td>tddd1</td><td>tddd2</td></tr></table>'
		+'123213123'
		 
	}]
})