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
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            action: 'submit',
            handler: function () {
                debugger;
                var form = this.up().up().down('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        url: '/EJBGlassfishJPA-1.0/add-node',
                        waitMsg: 'Loading...',
                        method: 'POST',
                        success: function (form, action) {
                            console.log(action.response.responseText);
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
//                Ext.Ajax.request({
//                    method: 'POST',
//                    url: '/EJBGlassfishJPA-1.0/add-node',
//                    params : Ext.JSON.encode(obj),
//                    headers: { 'Content-Type': 'application/json' },
//                    success: function (response) {
//                        alert('success: ' + response.responseText);
//                    },
//                    failure: function (e, jqxhr) {
//                        alert('failure!');
//                        alert(e.status);
//                    }
//                });
//                this.up('window').close();
            }
//            disabled: true
        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});