package com.devcolibri.servlet;

import com.devcolibri.bean.LinkBean;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Roman on 27.04.2015.
 */
@WebServlet("/delete-link")
public class DeleteLink extends HttpServlet {
    @EJB
    private LinkBean linkBean;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(req.getParameter("id") != null && req.getParameter("id") != ""){
            long id = Long.valueOf(req.getParameter("id"));
            linkBean.delete(id);
        }
        resp.sendRedirect("list-link");
    }
}
