package com.mls.Blog_API.model;

import jakarta.persistence.*;
import lombok.*;

import java.awt.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Article {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long articleId;
    private String articleTitle;
    @Column(columnDefinition = "MEDIUMTEXT")
    private String articleBody;
    private Date articleDate;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "article_tags",
            joinColumns = @JoinColumn(name = "article_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> articleTags;
}
