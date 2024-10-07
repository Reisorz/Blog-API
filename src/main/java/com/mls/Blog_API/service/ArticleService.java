package com.mls.Blog_API.service;

import com.mls.Blog_API.model.Article;
import com.mls.Blog_API.model.Tag;
import com.mls.Blog_API.repository.ArticleRepository;
import com.mls.Blog_API.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.metrics.StartupStep;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ArticleService implements IArticleService{

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private TagRepository tagRepository;

    @Override
    public List<Article> listArticles() {
        return articleRepository.findAll();
    }

    @Override
    public Article searchArticleById(Long articleId) {
        return articleRepository.findById(Long.valueOf(articleId)).orElse(null);
    }

    @Override
    public List<Article> searchArticleByTitle(String articleTitle) {
        return articleRepository.searchArticleByTitle(articleTitle);
    }


    @Override
    public Article saveArticle(Article article) {
        List<Tag> articleTags = new ArrayList<>();

        for (Tag tag : article.getArticleTags()) {
            Tag existingTag = tagRepository.searchTagByName(tag.getTagName());
            if (existingTag == null) {
                existingTag = tagRepository.save(tag);
            }
            articleTags.add(existingTag);
        }

        article.setArticleTags(articleTags);
        return articleRepository.save(article);
    }

    @Override
    public void deleteArticle(Article article) {
        articleRepository.delete(article);
    }
}
