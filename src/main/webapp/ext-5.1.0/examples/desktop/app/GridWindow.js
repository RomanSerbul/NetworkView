/*!
 * Ext JS Library
 * Copyright(c) 2006-2014 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('Desktop.GridWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Desktop.view.AddNodeFormView'
    ],

    id:'grid-win',

    init : function(){
        this.launcher = {
            text: 'Nodes',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var data = [];
        var win = desktop.getWindow('grid-win');
        Ext.Ajax.request({
            url: '/EJBGlassfishJPA-1.0/list-node',
            success: function(response, options){
                var objAjax = Ext.decode(response.responseText);
                for(var i =0;i<objAjax.length;i++){
                    data.push([objAjax[i].name,objAjax[i].type,objAjax[i].id]);
                }
                if(!win){
                    win = desktop.createWindow({
                        id: 'grid-win',
                        title:'List Devices',
                        autoShow:true,
                        width:740,
                        height:480,
                        iconCls: 'icon-grid',
                        animCollapse:false,
                        constrainHeader:true,
                        layout: 'fit',
                        items: [
                            {
                                border: false,
                                xtype: 'grid',
                                store: new Ext.data.ArrayStore({
                                    fields: [
                                        { name: 'name' },
                                        { name: 'type'},
                                        { name: 'id'}
                                    ],
                                    data: data
                                }),
                                columns: [
                                    new Ext.grid.RowNumberer(),
                                    {
                                        text: "Name",
                                        flex: 1,
                                        sortable: true,
                                        dataIndex: 'name'
                                    },
                                    {
                                        text: "Type",
                                        width: 70,
                                        sortable: true,
                                        dataIndex: 'type'
                                    },
                                    {
                                        text: "Id",
                                        width: 70,
                                        sortable: true,
                                        dataIndex: 'id'
                                    }
                                ]
                            }
                        ],
                        tbar:[{
                            text:'Add',
                            tooltip:'Add new',
                            iconCls:'add',
                            handler: function(){
                                Ext.widget('addNodeFormView');
//                                window.open("/EJBGlassfishJPA-1.0/add-node");
                            }
                        }, '-', {
                            text:'Options',
                            tooltip:'Modify options',
                            iconCls:'option'
                        },'-',{
                            text:'Remove',
                            tooltip:'Remove the selected item',
                            iconCls:'remove',
                            handler: function(){
                                var selection = win.items.items[0].getView().getSelectionModel().getSelection()[0];
                                debugger;
                                if (selection) {
                                    window.open("/EJBGlassfishJPA-1.0/delete-node?id="+selection.data.id);
                                }
                            }
                        }]
                    });
                }
            },
            failure: function(response, options){
                alert("Ошибка: " + response.statusText);
            }
        });
        return win;
    },

    statics: {
        getDummyData: function () {
//            var objAjax;
//            Ext.Ajax.request({
//                url: '/EJBGlassfishJPA-1.0/list-node',
//                success: function(response, options){
//                    var objAjax = Ext.decode(response.responseText);
//                    var data = [];
//                    for(var i =0;i<objAjax.length;i++){
//                        data.push([objAjax[i].name,objAjax[i].type,objAjax[i].id]);
//                    }
//                    return data;
//
//                },
//                failure: function(response, options){
//                    alert("Ошибка: " + response.statusText);
//                }
//            });
        }
    }
});

