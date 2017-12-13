/**
 * This view is an example list of people.
 */
Ext.define('NetDClient.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        
    ],

    title: 'Personnel',

    store: {
       
    },

    columns: [
       
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
