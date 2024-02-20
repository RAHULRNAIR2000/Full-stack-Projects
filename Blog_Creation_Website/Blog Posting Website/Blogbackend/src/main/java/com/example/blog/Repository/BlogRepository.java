package com.example.blog.Repository;

import com.example.blog.Entity.Blogpost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blogpost,Long> {
}
