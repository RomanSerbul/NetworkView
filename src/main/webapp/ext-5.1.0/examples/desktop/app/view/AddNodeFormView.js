/**
 * Created by rose0414 on 14.05.2015.
 */
Ext.define('Desktop.view.AddNodeFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addNodeFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            standardSubmit: false,
            url: '/EJBGlassfishJPA-1.0/add-node',
            items: [
                {
                    xtype: 'textfield',
                    name: 'node_name',
                    fieldLabel: 'Название',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'node_type',
                    fieldLabel: 'Тип',
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
            action: 'add-node',
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
                                url: '/EJBGlassfishJPA-1.0/list-node',
                                success: function(response, options){
                                    var objAjax = Ext.decode(response.responseText);
                                    for(var i =0;i<objAjax.length;i++){
                                        data.push([objAjax[i].name,objAjax[i].type,objAjax[i].id]);
                                    }
                                    Ext.get('grid-win').component.items.items[0].getStore().loadData(data);
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