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
import javax.xml.registry.infomodel.User;
import java.io.IOException;
import java.util.List;

/**
 * Created by Roman on 27.04.2015.
 */
@WebServlet("/add-link")
public class AddAndEditLinkServlet extends HttpServlet{
    @EJB
    private LinkBean linkBean;

    @EJB
    private NodeBean nodeBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        resp.setContentType("text/html");
        req.setCharacterEncoding("UTF-8");

        if(req.getParameter("edit") != null){
            long id = Long.valueOf(req.getParameter("edit"));
            Link link = linkBean.get(id);

            req.setAttribute("link", link);
            List<Node> allNode = nodeBean.getAll();

            req.setAttribute("nodes", allNode);
        }
        req.getRequestDispatcher("/listLink.jsp").forward(req, resp);
//        req.getRequestDispatcher("/addLink.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        req.setCharacterEncoding("UTF-8");

        String name = req.getParameter("link_name");
        String type = req.getParameter("link_type");
        String color = req.getParameter("link_color");
        long from = Long.valueOf(req.getParameter("from_id"));
        long to = Long.valueOf(req.getParameter("to_id"));

        if(req.getParameter("id") != ""){
            long id = Long.valueOf(req.getParameter("id"));
            Link link = linkBean.get(id);
            link.setLinkName(name);
            link.setLinkType(type);
            link.setLinkColor(color);
            link.setFrom_id(from);
            link.setTo_id(to);
            linkBean.update(link);
        } else{
            linkBean.add(new Link(name, type,color, from, to));
        }
//        resp.sendRedirect("list-link");
    }
}
