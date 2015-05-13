package com.devcolibri.servlet;

import com.devcolibri.bean.LinkBean;
import com.devcolibri.bean.NodeBean;
import com.devcolibri.entity.Link;
import com.devcolibri.entity.Node;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Created by Roman on 27.04.2015.
 */
@WebServlet("/graph")
public class GraphServlet extends HttpServlet {
    @EJB
    private LinkBean linkBean;

    @EJB
    private NodeBean nodeBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        List<Link> allLink = linkBean.getAll();
        List<Node> allNode = nodeBean.getAll();

        req.setAttribute("links", allLink);
        req.setAttribute("nodes", allNode);

        req.getRequestDispatcher("/graphComponents.jsp").forward(req, resp);

    }
}
