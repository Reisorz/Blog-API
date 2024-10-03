package com.mls.Blog_API.controller;


import com.mls.Blog_API.exception.NotFoundExecption;
import com.mls.Blog_API.model.Article;
import com.mls.Blog_API.model.Tag;
import com.mls.Blog_API.service.ArticleService;
import com.mls.Blog_API.service.TagService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//http://localhost:8080/blog-app
@RequestMapping("blog-app")
@CrossOrigin(value = "http://localhost:4200")
public class TagController {
    private static final Logger logger = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    private TagService tagService;

    //http://localhost:8080/blog-app/tags
    @GetMapping("/tags")
    public List<Tag> listTags () {
        List<Tag> tags = this.tagService.listTags();
        tags.forEach(tag -> logger.info(tag.toString()));
        return tags;
    }

    @PostMapping("/tags")
    public Tag addTag(@RequestBody Tag tag) {
        logger.info("Added tag: " + tag);
        return this.tagService.saveTag(tag);
    }

    @GetMapping("tags/view-tags/{id}")
    public ResponseEntity<Tag> getTagById (@PathVariable Long id) {
        Tag tag = tagService.searchTagById(id);
        if (tag != null) {
            return ResponseEntity.ok(tag);
        } else {
            throw new NotFoundExecption("Tag with id " + id + " not found.");
        }
    }

    @PutMapping("tags/edit-tag/{id}")
    public ResponseEntity<Tag> editTag(@PathVariable Long id, @RequestBody Tag requestedTag) {
        Tag tag = tagService.searchTagById(id);
        tag.setTagName(requestedTag.getTagName());
        tag.setTagDescription(requestedTag.getTagDescription());
        tagService.saveTag(tag);
        return ResponseEntity.ok(tag);
    }

    @DeleteMapping("tags/delete-tag/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTag (@PathVariable Long id) {
        Tag tag = tagService.searchTagById(id);
        if (tag == null) {
            throw new NotFoundExecption("Tag with Id = " + id + " not found.");
        }
        tagService.deleteTag(tag);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
