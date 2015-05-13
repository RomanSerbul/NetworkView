package com.devcolibri.servlet;

import com.devcolibri.bean.NodeBean;
import com.devcolibri.entity.Node;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/list-node")
public class NodeServlet extends HttpServlet{

    @EJB
    private NodeBean nodeBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        List<Node> allNode = nodeBean.getAll();

        req.setAttribute("nodes", allNode);

        req.getRequestDispatcher("/listNode.jsp").forward(req, resp);

    }

}
