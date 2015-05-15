/*!
* Ext JS Library
* Copyright(c) 2006-2014 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

var windowIndex = 0;

Ext.define('Desktop.BogusModule', {
    extend: 'Ext.ux.desktop.Module',

    id:'graph',
    init : function(){
//        this.launcher = {
//            text: 'Window '+(++windowIndex),
//            iconCls:'bogus',
//            handler : this.createWindow,
//            scope: this,
//            windowId:windowIndex
//        }
        this.launcher = {
            text: 'Network Topology',
            iconCls:'bogus'
        };
    },

    createWindow : function(src){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('graph');
        if(!win){
            win = desktop.createWindow({
                id: 'graph',//+src.windowId,
                title: 'Network Topology',
                width:640,
                height:480,
                loader: {
                    url: '/EJBGlassfishJPA-1.0/graph_view.jsp',
                    autoLoad: true
                },
                listeners: {
                    afterlayout: function(form) { // ready
                        debugger;
                        //form.down('#firstname').focus(true);
                    }
                },
//                html : '<p>Something useful would be in here.</p>',
                iconCls: 'bogus',
                animCollapse:false,
                constrainHeader:true
            });
        }
        win.show();
        return win;
    }
});