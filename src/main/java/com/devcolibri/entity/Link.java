package com.devcolibri.entity;

import javax.persistence.*;

/**
 * Created by Roman on 27.04.2015.
 */
@Entity(name = "links")
@NamedQueries({
        @NamedQuery(name = "Link.getAll", query = "select l from links l")
})
public class Link {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "link_ID")
    private long id;

    @Column(name = "link_name", nullable = false)
    private String linkName;

    @Column(name = "link_type", nullable = false)
    private String linkType;

    @Column(name = "link_color", nullable = false)
    private String linkColor;

    @Column(name = "from_ID")
    private long from_id;

    @Column(name = "to_ID")
    private long to_id;

    public Link() {
    }

    public Link(String linkName, String linkType, String linkColor, long from_id,long to_id) {
        this.linkName = linkName;
        this.linkType = linkType;
        this.linkColor = linkColor;
        this.from_id = from_id;
        this.to_id = to_id;
    }

    public String getLinkColor() {
        return linkColor;
    }

    public void setLinkColor(String linkColor) {
        this.linkColor = linkColor;
    }

    public String getLinkType() {
        return linkType;
    }

    public void setLinkType(String linkType) {
        this.linkType = linkType;
    }

    public String getLinkName() {
        return linkName;
    }

    public void setLinkName(String linkName) {
        this.linkName = linkName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getFrom_id() {
        return from_id;
    }

    public void setFrom_id(long from_id) {
        this.from_id = from_id;
    }

    public long getTo_id() {
        return to_id;
    }

    public void setTo_id(long to_id) {
        this.to_id = to_id;
    }
}
