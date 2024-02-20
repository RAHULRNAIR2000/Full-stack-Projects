package net.welcomedeck.ems.service;

import net.welcomedeck.ems.ImageUtils;
import net.welcomedeck.ems.entity.Images;
import net.welcomedeck.ems.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;

    public String uploadNewJoineeImage(Long id, MultipartFile file) throws IOException {
        imageRepository.save(Images.builder()
                .imageId(id)
                .image(ImageUtils.compressImage(file.getBytes()))
                .build());
        return "File uplaoded successfully";
    }

    public ResponseEntity<?> downloadNewJoineeImage(Long id) {
        Optional<Images> optionalNewJoineeImage = imageRepository.findById(id);
        return optionalNewJoineeImage.map(image -> {
            try {
                byte[] imageData = ImageUtils.decompressImage(image.getImage());
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.IMAGE_JPEG); // Set the appropriate content type
                return ResponseEntity.ok().headers(headers).body(imageData);
            } catch (IOException exception) {
                // Log the exception or throw a custom exception
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }).orElse(ResponseEntity.notFound().build());
    }
}
