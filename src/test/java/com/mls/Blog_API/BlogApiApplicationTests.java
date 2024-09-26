package com.mls.Blog_API;

import com.mls.Blog_API.model.Article;
import com.mls.Blog_API.service.ArticleService;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class BlogApiApplicationTests {
	@Autowired
	public static ArticleService articleService;

	public static final Logger logger = LoggerFactory.getLogger(com.mls.Blog_API.BlogApiApplicationTests.class);

	@Test
	void contextLoads() {
		List<Article> articles = articleService.listArticles();
		articles.forEach(article -> logger.info(article.toString()));
		logger.info("Done");
	}

	public static void main(String[] args) {
		List<Article> articles = articleService.listArticles();
		articles.forEach(article -> logger.info(article.toString()));
		logger.info("Done");
	}

}
