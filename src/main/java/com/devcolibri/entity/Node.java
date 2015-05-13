package com.devcolibri.entity;

import javax.persistence.*;

@Entity(name = "nodes")
@NamedQueries({
        @NamedQuery(name = "Node.getAll", query = "select n from nodes n")
})
public class Node {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "node_ID")
    private long id;

    @Column(name = "node_name", nullable = false)
    private String nodeName;

    @Column(name = "node_type", nullable = false)
    private String nodeType;

    public Node() {
    }

    public Node(String nodeName, String nodeType) {

        this.nodeName = nodeName;
        this.nodeType = nodeType;
    }

    public void setNodeName(String nodeName) {
        this.nodeName = nodeName;
    }

    public String getNodeType() {
        return nodeType;
    }

    public void setNodeType(String nodeType) {
        this.nodeType = nodeType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNodeName() {
        return nodeName;
    }
}
