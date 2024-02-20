package com.example.blog.Service;

import com.example.blog.Entity.Blogpost;
import com.example.blog.Repository.BlogRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {
    @Autowired
    private BlogRepository blogRepository;

    public List<Blogpost> getAllBlogPosts() {
        return blogRepository.findAll();
    }

    public  List<Blogpost>  createBlogPost( List<Blogpost>  blogPost) {
        return blogRepository.saveAll(blogPost);
    }
    public void likeBlogpost(Long id){

        Blogpost blogpost = blogRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Blog post not found"));

        // Increment like count
        blogpost.setLikes(blogpost.getLikes()+1);

        // Save updated blog post

        blogRepository.save(blogpost);

    }


    public Blogpost getBlogPostById(Long id) {
        return blogRepository.findById(id).orElse(null);
    }

    public void deleteBlogPost(Long id) {
        blogRepository.deleteById(id);
    }


}
