package com.mls.Blog_API.service;

import com.mls.Blog_API.model.Tag;
import com.mls.Blog_API.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService implements ITagService{

    @Autowired
    private TagRepository tagRepository;

    @Override
    public List<Tag> listTags() {
        return tagRepository.findAll();
    }

    @Override
    public Tag searchTagById(Long tagId) {
        return tagRepository.findById(Long.valueOf(tagId)).orElse(null);
    }

    @Override
    public Tag searchTagByName(String tagName) {
        return tagRepository.searchTagByName(tagName);
    }

    @Override
    public Tag saveTag(Tag tag) {
        return tagRepository.save(tag);
    }

    @Override
    public void deleteTag(Tag tag) {
        tagRepository.delete(tag);
    }
}
