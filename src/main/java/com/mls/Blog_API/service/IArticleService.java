package com.mls.Blog_API.service;

import com.mls.Blog_API.model.Article;

import java.util.List;

public interface IArticleService {
    public List<Article> listArticles();

    public Article searchArticleById(Integer articleId);

    public List<Article> searchArticleByTitle (String articleTitle);

    public Article saveArticle(Article article);

    public void deleteArticle(Article article);
}
