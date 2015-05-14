/**
 * Created by rose0414 on 14.05.2015.
 */
Ext.define('Desktop.model.NodesListModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'type', 'id'],
    proxy: {
        type: 'rest',
        api: {
            create: 'list-node',
            read: 'list-node',
            destroy: 'list-node',
            update: 'list-node'
        },
        reader: {
            type: 'json',
//            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});