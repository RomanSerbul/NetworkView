<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Добавление | Редактирование</title>
</head>
<body>

    <form action="add-node" method="post">
        <label for="node_name">Введите название:
            <input type="text" id="node_name" value="${node.nodeName}" name="node_name" />
        </label>  <br />
        <label for="node_type">Введите тип:
            <input type="text" id="node_type" value="${node.nodeType}" name="node_type" />
        </label>  <br />
        <input type="hidden" name="id" value="${node.id}" />
        <input type="submit" value="Сохранить" />
    </form>

</body>
</html>