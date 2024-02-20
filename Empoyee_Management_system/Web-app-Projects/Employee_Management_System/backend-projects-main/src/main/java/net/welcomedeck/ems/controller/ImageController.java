package net.welcomedeck.ems.controller;

import net.welcomedeck.ems.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.zip.DataFormatException;

@RestController
@CrossOrigin(origins = "*")
public class ImageController {
    @Autowired
    ImageService imageService;

    @PostMapping("/upload/{id}")
    public ResponseEntity<String> uploadNewJoineeImage(@PathVariable Long id, @RequestParam("file") MultipartFile file) throws IOException {
        String response = imageService.uploadNewJoineeImage(id, file);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<?> downloadNewJoineeImage(@PathVariable Long id) throws DataFormatException, IOException {
        return imageService.downloadNewJoineeImage(id);
    }
}
