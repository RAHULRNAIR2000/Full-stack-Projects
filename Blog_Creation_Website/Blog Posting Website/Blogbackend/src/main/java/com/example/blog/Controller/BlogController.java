package com.example.blog.Controller;

import com.example.blog.Entity.Blogpost;
import com.example.blog.Service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/blogposts")
public class BlogController {
    @Autowired
    private BlogService blogService;

    @GetMapping("/get")
    public List<Blogpost> getAllBlogposts(){
        return blogService.getAllBlogPosts();
    }
    @PostMapping("/add")
    public List<Blogpost> createBlogPost(@RequestBody List<Blogpost> blogPost) {
        return blogService.createBlogPost(blogPost);
    }

    @PostMapping("/likes/{id}")
    public ResponseEntity<String> likeBlogPost(@PathVariable Long id){
        blogService.likeBlogpost(id);
        return ResponseEntity.ok("blog post liked successfully");
    }

    @GetMapping("/{id}")
    public Blogpost getBlogPostById(@PathVariable Long id) {
        return blogService.getBlogPostById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteBlogPost(@PathVariable Long id) {
        blogService.deleteBlogPost(id);
    }
}
