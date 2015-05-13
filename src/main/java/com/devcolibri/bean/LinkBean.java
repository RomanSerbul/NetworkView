package com.devcolibri.bean;

import com.devcolibri.entity.Link;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by Roman on 27.04.2015.
 */
@Stateless
@Local
public class LinkBean {
    @PersistenceContext(unitName = "DEVMODE")
    private EntityManager em;

    public Link add(Link link){
        return em.merge(link);
    }

    public Link get(long id){
        return em.find(Link.class, id);
    }

    public void update(Link link){
        add(link);
    }

    public void delete(long id){
        em.remove(get(id));
    }

    public List<Link> getAll(){
        TypedQuery<Link> namedQuery = em.createNamedQuery("Link.getAll", Link.class);
        return namedQuery.getResultList();
    }

}
