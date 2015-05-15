/**
 * Created by rose0414 on 15.05.2015.
 */
/*!
 * Ext JS Library
 * Copyright(c) 2006-2014 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('Desktop.GridWindow2', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Desktop.view.AddLinkFormView'
    ],

    id:'grid-win2',
    autoShow:true,

    init : function(){
        this.launcher = {
            text: 'Links',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var data = [];
        var win = desktop.getWindow('grid-win2');
        Ext.Ajax.request({
            url: '/EJBGlassfishJPA-1.0/list-link',
            success: function(response, options){
                var objAjax = Ext.decode(response.responseText);
                for(var i =0;i<objAjax.length;i++){
                    data.push([objAjax[i].name,objAjax[i].type,objAjax[i].color,objAjax[i].from,objAjax[i].to,objAjax[i].id]);
                }
                if(!win){
                    win = desktop.createWindow({
                        id: 'grid-win2',
                        title:'List Links',
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
                                        { name: 'color'},
                                        { name: 'from'},
                                        { name: 'to'},
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
                                        width: 170,
                                        sortable: true,
                                        dataIndex: 'type'
                                    },
                                    {
                                        text: "Color",
                                        width: 70,
                                        sortable: true,
                                        dataIndex: 'color'
                                    },
                                    {
                                        text: "From ID",
                                        width: 70,
                                        sortable: true,
                                        dataIndex: 'from'
                                    },
                                    {
                                        text: "To ID",
                                        width: 70,
                                        sortable: true,
                                        dataIndex: 'to'
                                    },
                                    {
                                        text: "ID",
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
                                Ext.widget('addLinkFormView');
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
                                    Ext.Ajax.request({
                                        url: '/EJBGlassfishJPA-1.0/delete-link?id='+selection.data.id,
                                        success: function(response, options){
                                            console.log('ok');
                                            Ext.Ajax.request({
                                                url: '/EJBGlassfishJPA-1.0/list-link',
                                                success: function(response2, options){
                                                    var data2 = [];
                                                    var objAjax = Ext.decode(response2.responseText);
                                                    for(var i =0;i<objAjax.length;i++){
                                                        data2.push([objAjax[i].name,objAjax[i].type,objAjax[i].color,objAjax[i].from,objAjax[i].to,objAjax[i].id]);
                                                    }
                                                    Ext.get('grid-win2').component.items.items[0].getStore().loadData(data2);
                                                    debugger;
                                                },
                                                failure: function(response2, options){
                                                    alert("Ошибка: " + response2.statusText);
                                                }
                                            });
                                        },
                                        failure: function(response, options){
                                            alert("Ошибка: " + response.statusText);
                                        }
                                    });
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

        }
    }
});

