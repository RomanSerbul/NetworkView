<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>--%>
<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%--<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>--%>
<html>
<head><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-61231638-1', 'auto');ga('send', 'pageview');</script>
    <title>Network | Images</title>

    <style type="text/css">
        body {
            font: 10pt arial;
        }
        #mynetwork {
            width: 100%;
            height: 100%;
            border: 1px solid lightgray;
        }
    </style>

    <script type="text/javascript" src="http://visjs.org/dist/vis.js"></script>
    <link href="http://visjs.org/dist/vis.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript">
        var nodes = null;
        var edges = null;
        var network = null;

        var DIR = 'http://visjs.org/examples/network/img/refresh-cl/';
        var LENGTH_MAIN = 150;
        var LENGTH_SUB = 50;
        debugger;

        // Called when the Visualization API is loaded.
//        function draw() {
            debugger;
            // Create a data table with nodes.
            nodes = [];

            // Create a data table with links.
            edges = [];

            nodes.push({id: 1, label: 'Main', image: DIR + 'Network-Pipe-icon.png', shape: 'image'});
            nodes.push({id: 2, label: 'Office', image: DIR + 'Network-Pipe-icon.png', shape: 'image'});
            nodes.push({id: 3, label: 'Wireless', image: DIR + 'Network-Pipe-icon.png', shape: 'image'});
            edges.push({from: 1, to: 2, length: LENGTH_MAIN});
            edges.push({from: 1, to: 3, length: LENGTH_MAIN});

            for (var i = 4; i <= 7; i++) {
                nodes.push({id: i, label: 'Computer', image: DIR + 'Hardware-My-Computer-3-icon.png', shape: 'image'});
                edges.push({from: 2, to: i, length: LENGTH_SUB});
            }

            nodes.push({id: 101, label: 'Printer', image: DIR + 'Hardware-Printer-Blue-icon.png', shape: 'image'});
            edges.push({from: 2, to: 101, length: LENGTH_SUB});

            nodes.push({id: 102, label: 'Laptop', image: DIR + 'Hardware-Laptop-1-icon.png', shape: 'image'});
            edges.push({from: 3, to: 102, length: LENGTH_SUB});

            nodes.push({id: 103, label: 'network drive', image: DIR + 'Network-Drive-icon.png', shape: 'image'});
            edges.push({from: 1, to: 103, length: LENGTH_SUB});

            nodes.push({id: 104, label: 'Internet', image: DIR + 'System-Firewall-2-icon.png', shape: 'image'});
            edges.push({from: 1, to: 104, length: LENGTH_SUB});

            for (var i = 200; i <= 201; i++ ) {
                nodes.push({id: i, label: 'Smartphone', image: DIR + 'Hardware-My-PDA-02-icon.png', shape: 'image'});
                edges.push({from: 3, to: i, length: LENGTH_SUB});
            }

            // create a network
            var container = document.getElementById('mynetwork');
            var data = {
                nodes: nodes,
                edges: edges
            };
            var options = {
                stabilize: false   // stabilize positions before displaying
            };
            network = new vis.Network(container, data, options);
//        }
    </script>
</head>

<body>

<div id="mynetwork"></div>

</body>
</html>