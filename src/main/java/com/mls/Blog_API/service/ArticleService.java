package com.mls.Blog_API.service;

import com.mls.Blog_API.model.Article;
import com.mls.Blog_API.repository.ArticleRepository;
import com.mls.Blog_API.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.metrics.StartupStep;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService implements IArticleService{

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private TagService tagService;

    @Override
    public List<Article> listArticles() {
        return articleRepository.findAll();
    }

    @Override
    public Article searchArticleById(Integer articleId) {
        return articleRepository.findById(Long.valueOf(articleId)).orElse(null);
    }

    @Override
    public List<Article> searchArticleByTitle(String articleTitle) {
        return articleRepository.searchArticleByTitle(articleTitle);
    }

    @Override
    public Article saveArticle(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public void deleteArticle(Article article) {
        articleRepository.delete(article);
    }
}
