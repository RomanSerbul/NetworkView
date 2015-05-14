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
