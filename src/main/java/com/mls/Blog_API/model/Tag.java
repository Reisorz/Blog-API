package com.mls.Blog_API.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Table(name = "tag")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;
    private String tagName;
    private String tagDescription;

    @ManyToMany(targetEntity = Article.class, fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinTable(
            name = "article_tags",
            joinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "tagId"),
            inverseJoinColumns = @JoinColumn(name = "article_id", referencedColumnName = "articleId")
    )
    private Set<Tag> tagArticles = new HashSet<>();




    public Set<Tag> getTagArticles() {
        return tagArticles;
    }

    public void setTagArticles(Set<Tag> tagArticles) {
        this.tagArticles = tagArticles;
    }

    public String getTagDescription() {
        return tagDescription;
    }

    public void setTagDescription(String tagDescription) {
        this.tagDescription = tagDescription;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    public Long getTagId() {
        return tagId;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }
}


