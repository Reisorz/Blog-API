package com.mls.Blog_API.repository;

import com.mls.Blog_API.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article,Long> {
}
