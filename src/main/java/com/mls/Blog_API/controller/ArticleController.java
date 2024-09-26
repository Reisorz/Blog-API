package com.mls.Blog_API.controller;

import com.mls.Blog_API.model.Article;
import com.mls.Blog_API.service.ArticleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

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


}
