package com.mls.Blog_API.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.awt.*;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Table(name = "article")
public class Article {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long articleId;

    private String articleTitle;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String articleBody;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm" , timezone = "Europe/Madrid")
    private Date articleDate;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "article_tags",
            joinColumns = @JoinColumn(name = "article_id", referencedColumnName = "articleId"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "tagId")
    )
    private Set<Tag> articleTags = new HashSet<>();






    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public String getArticleBody() {
        return articleBody;
    }

    public void setArticleBody(String articleBody) {
        this.articleBody = articleBody;
    }

    public Date getArticleDate() {
        return articleDate;
    }

    public void setArticleDate(Date articleDate) {
        this.articleDate = articleDate;
    }

    public Set<Tag> getArticleTags() {
        return articleTags;
    }

    public void setArticleTags(Set<Tag> articleTags) {
        this.articleTags = articleTags;
    }
}
