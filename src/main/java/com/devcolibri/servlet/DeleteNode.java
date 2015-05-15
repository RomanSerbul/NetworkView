package com.devcolibri.servlet;

import com.devcolibri.bean.NodeBean;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/delete-node")
public class DeleteNode extends HttpServlet {

    @EJB
    private NodeBean nodeBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(req.getParameter("id") != null && req.getParameter("id") != ""){
            long id = Long.valueOf(req.getParameter("id"));
            nodeBean.delete(id);
        }
//        resp.sendRedirect("list-node");
    }
}
