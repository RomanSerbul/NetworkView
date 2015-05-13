<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>--%>
<html>
<head>
    <title>Список устройств</title>
</head>
<body>

    <h3>Список устройств:</h3>(<a href="add-node">Добавить</a>)
    <ol>
        <c:forEach items="${nodes}" var="node">
            <li>
                ${node.nodeName} ${node.nodeType} -
                    <a href="add-node?edit=${node.id}">редактировать</a> | <a href="delete-node?id=${node.id}">удалить</a>
            </li>
        </c:forEach>
    </ol>

</body>
</html>