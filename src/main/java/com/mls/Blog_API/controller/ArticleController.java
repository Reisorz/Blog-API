package com.mls.Blog_API.controller;

import com.mls.Blog_API.exception.NotFoundExecption;
import com.mls.Blog_API.model.Article;
import com.mls.Blog_API.service.ArticleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//http://localhost:8080/blog-app
@RequestMapping("blog-app")
@CrossOrigin(value = "http://localhost:4200")
public class ArticleController {

    private static final Logger logger = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    private ArticleService articleService;

    //http://localhost:8080/blog-app/articles
    @GetMapping("/articles")
    public List<Article> listArticles () {
        List<Article> articles = this.articleService.listArticles();
        articles.forEach(article -> logger.info(article.toString()));
        return articles;
    }

    @PostMapping("/articles")
    public Article addArticle(@RequestBody Article article) {
        logger.info("Added article: " + article);
        return this.articleService.saveArticle(article);
    }

    @GetMapping("articles/view-article/{id}")
    public ResponseEntity<Article> getArticleById (@PathVariable Long id) {
        Article article = articleService.searchArticleById(id);
        if (article != null) {
            return ResponseEntity.ok(article);
        } else {
            throw new NotFoundExecption("Articles with id " + id + " not found.");
        }
    }

    @PutMapping("articles/edit-article/{id}")
    public ResponseEntity<Article> editArticle (@PathVariable Long id, @RequestBody Article requestedArticle) {
        Article article = articleService.searchArticleById(id);
        article.setArticleTitle(requestedArticle.getArticleTitle());
        article.setArticleBody(requestedArticle.getArticleBody());
        article.setArticleTags(requestedArticle.getArticleTags());
        articleService.saveArticle(article);
        return ResponseEntity.ok(article);
    }

    @DeleteMapping("articles/delete-article/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteArticle (@PathVariable Long id) {
        Article article = articleService.searchArticleById(id);
        if (article == null) {
            throw new NotFoundExecption("Article with Id = " + id + " not found.");
        }
        articleService.deleteArticle(article);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
