<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Добавление | Редактирование</title>
</head>
<body>

<form action="add-link" method="post">
    <label for="link_name">Введите название:
        <input type="text" id="link_name" value="${link.linkName}" name="link_name" />
    </label>  <br />
    <label for="link_type">Введите тип:
        <input type="text" id="link_type" value="${link.linkType}" name="link_type" />
    </label>  <br />
    <label for="link_color">Введите цвет:
        <input type="text" id="link_color" value="${link.linkColor}" name="link_color" />
    </label>  <br />
    <label for="from_id">Откуда:
        <input type="text" id="from_id" value="${link.from_id}" name="from_id" />
    </label> <br />
    <label for="to_id">Куда:
        <input type="text" id="to_id" value="${link.to_id}" name="to_id" />
    </label>  <br />
    <input type="hidden" name="id" value="${link.id}" />
    <input type="submit" value="Сохранить" />
</form>

</body>
</html>