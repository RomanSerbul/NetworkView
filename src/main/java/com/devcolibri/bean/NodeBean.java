package com.devcolibri.bean;

import com.devcolibri.entity.Node;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
@Local
public class NodeBean {

    // Будет инициализирован контейнером Glassfish
    // unitName = "DEVMODE" - это имя persistence-unit
    // EntityManager дает возможность выполнять CRUD запросы в БД
    @PersistenceContext(unitName = "DEVMODE")
    private EntityManager em;

    // Добавляем Node В базу данных
    public Node add(Node node){
        return em.merge(node);
    }

    // Получаем node по id
    public Node get(long id){
        return em.find(Node.class, id);
    }

    // обновляем node
    // если Node которого мыпытаемся обновить нет,
    // то запишется он как новый
    public void update(Node node){
        add(node);
    }

    // удаляем Node по id
    public void delete(long id){
        em.remove(get(id));
    }

    // Получаем все nodes с БД
    public List<Node> getAll(){
        TypedQuery<Node> namedQuery = em.createNamedQuery("Node.getAll", Node.class);
        return namedQuery.getResultList();
    }

}
