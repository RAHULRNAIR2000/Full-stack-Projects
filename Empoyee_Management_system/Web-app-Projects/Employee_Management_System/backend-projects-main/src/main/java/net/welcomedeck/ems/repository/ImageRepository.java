package net.welcomedeck.ems.repository;

import net.welcomedeck.ems.entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository <Images,Long>{

}
