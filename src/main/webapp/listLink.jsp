<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>--%>
<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%--&lt;%&ndash;<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>&ndash;%&gt;--%>
<%--<html>--%>
<%--<head>--%>
    <%--<title>Список связей</title>--%>
<%--</head>--%>
<%--<body>--%>

<%--<h3>Список связей:</h3>(<a href="add-link">Добавить</a>)--%>
<%--<ol>--%>
    <%--<c:forEach items="${links}" var="link">--%>
        <%--<li>--%>
                <%--${link.linkName} ${link.linkType} ${link.linkColor} ${link.from_id} - ${link.to_id}--%>
            <%--<a href="add-link?edit=${link.id}">редактировать</a> | <a href="delete-link?id=${link.id}">удалить</a>--%>
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

<json:array name="links" var="link" items="${links}">
    <json:object>
        <json:property name="id" value="${link.id}"/>
        <json:property name="name" value="${link.linkName}"/>
        <json:property name="type" value="${link.linkType}"/>
        <json:property name="color" value="${link.linkColor}"/>
        <json:property name="from" value="${link.from_id}"/>
        <json:property name="to" value="${link.to_id}"/>
    </json:object>
</json:array>