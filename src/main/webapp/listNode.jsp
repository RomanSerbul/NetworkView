<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>--%>
<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%--&lt;%&ndash;<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>&ndash;%&gt;--%>
<%--<html>--%>
<%--<head>--%>
    <%--<title>Список устройств</title>--%>
<%--</head>--%>
<%--<body>--%>

    <%--<h3>Список устройств:</h3>(<a href="add-node">Добавить</a>)--%>
    <%--<ol>--%>
        <%--<c:forEach items="${nodes}" var="node">--%>
            <%--<li>--%>
                <%--${node.nodeName} ${node.nodeType} ---%>
                    <%--<a href="add-node?edit=${node.id}">редактировать</a> | <a href="delete-node?id=${node.id}">удалить</a>--%>
            <%--</li>--%>
        <%--</c:forEach>--%>
    <%--</ol>--%>

<%--</body>--%>
<%--</html>--%>
<%@ taglib prefix="json" uri="http://www.atg.com/taglibs/json" %>
<%--
  Created by IntelliJ IDEA.
  User: rose0414
  Date: 14.05.2015
  Time: 12:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" %>
<%@ page pageEncoding="UTF-8" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<%--<%@ taglib uri="http://www.atg.com/taglibs/json" prefix="json" %>--%>

<json:array name="nodes" var="node" items="${nodes}">
    <json:object>
        <json:property name="name" value="${node.nodeName}"/>
        <json:property name="type" value="${node.nodeType}"/>
        <json:property name="id" value="${node.id}"/>
    </json:object>
</json:array>
