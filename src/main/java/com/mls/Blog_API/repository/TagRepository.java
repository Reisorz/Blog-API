package com.mls.Blog_API.repository;

import com.mls.Blog_API.model.Article;
import com.mls.Blog_API.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag,Long> {
    @Query( value = "SELECT * FROM tag WHERE tag_name LIKE %:tagName%", nativeQuery = true)
    Tag searchTagByName(@Param("tagName") String tagName);
}
