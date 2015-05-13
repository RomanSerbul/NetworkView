<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>--%>
<html>
<head>
    <title>Graph Components</title>
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

<h3>Список связей:</h3>(<a href="add-link">Добавить</a>)
<ol>
    <c:forEach items="${links}" var="link">
        <li>
                ${link.linkName} ${link.linkType} ${link.linkColor} ${link.from_id} - ${link.to_id}
            <a href="add-link?edit=${link.id}">редактировать</a> | <a href="delete-link?id=${link.id}">удалить</a>
        </li>
    </c:forEach>
</ol>
<input type="button" id="show_graph" onclick="clickShow();" value="Network View" name="show_graph" />
</body>
<script type="text/javascript">
    function clickShow()
    {
        window.open("graph_view.jsp");
    }
</script>
</html>