package com.devcolibri.servlet;

import com.devcolibri.bean.NodeBean;
import com.devcolibri.entity.Node;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.registry.infomodel.User;
import java.io.IOException;

@WebServlet("/add-node")
public class AddAndEditNodeServlet extends HttpServlet {

    @EJB
    private NodeBean nodeBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        resp.setContentType("text/html");
        req.setCharacterEncoding("UTF-8");

        if(req.getParameter("edit") != null){
            long id = Long.valueOf(req.getParameter("edit"));
            Node node = nodeBean.get(id);

            req.setAttribute("node", node);
        }

        req.getRequestDispatcher("/listNode.jsp").forward(req, resp);

        //req.getRequestDispatcher("/addNode.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        req.setCharacterEncoding("UTF-8");

        String name = req.getParameter("node_name");
        String type = req.getParameter("node_type");

        if(req.getParameter("id") != ""){
            long id = Long.valueOf(req.getParameter("id"));
            Node node = nodeBean.get(id);
            node.setNodeType(type);
            node.setNodeName(name);
            nodeBean.update(node);
        } else{
            nodeBean.add(new Node(name, type));
        }
//        resp.sendRedirect("list-node");
    }
}
