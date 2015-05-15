/**
 * Created by rose0414 on 15.05.2015.
 */
Ext.define('Desktop.view.AddLinkFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addLinkFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            standardSubmit: false,
            url: '/EJBGlassfishJPA-1.0/add-link',
            items: [
                {
                    xtype: 'textfield',
                    name: 'link_name',
                    fieldLabel: 'Название',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'link_type',
                    fieldLabel: 'Тип',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'link_color',
                    fieldLabel: 'Цвет',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'from_id',
                    fieldLabel: 'От у-ства',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'to_id',
                    fieldLabel: 'В у-ство',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'id',
                    fieldLabel: 'ID',
                    value: '',
                    hidden: true
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            action: 'add-link',
            handler: function () {
                var wind = this.up('window');
                var form = this.up().up().down('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        waitMsg: 'Loading...',
                        method: 'POST',
                        success: function (form, action) {
                            console.log(action.response.responseText);
                            wind.close();
                            var data = [];
                            Ext.Ajax.request({
                                url: '/EJBGlassfishJPA-1.0/list-link',
                                success: function(response, options){
                                    var objAjax = Ext.decode(response.responseText);
                                    for(var i =0;i<objAjax.length;i++){
                                        data.push([objAjax[i].name,objAjax[i].type,objAjax[i].color,objAjax[i].from,objAjax[i].to,objAjax[i].id]);
                                    }
                                    Ext.get('grid-win2').component.items.items[0].getStore().loadData(data);
                                    debugger;
                                },
                                failure: function(response, options){
                                    alert("Ошибка: " + response.statusText);
                                }
                            });
                        },
                        failure: function(form, action) {
                            if (action.result.status == true) {
                                console.log('success!');
                            }
                        }
                    });
                } else {
                    Ext.Msg.alert( "Error!", "Your form is invalid!" );
                }
                //this.up('window').close();
            }
        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});