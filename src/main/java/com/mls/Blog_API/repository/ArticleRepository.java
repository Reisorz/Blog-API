package com.mls.Blog_API.repository;

import com.mls.Blog_API.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article,Long> {
    @Query( value = "SELECT * FROM article WHERE article_title LIKE %:articleTitle%", nativeQuery = true)
    List<Article> searchArticleByTitle(@Param("articleTitle") String articleTitle);
}
