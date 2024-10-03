package com.mls.Blog_API.service;

import com.mls.Blog_API.model.Article;
import com.mls.Blog_API.model.Tag;

import java.util.List;

public interface ITagService {
    public List<Tag> listTags();

    public Tag searchTagById(Long tagId);

    public List<Tag> searchTagByName (String tagName);

    public Tag saveTag(Tag tag);

    public void deleteTag(Tag tag);
}
