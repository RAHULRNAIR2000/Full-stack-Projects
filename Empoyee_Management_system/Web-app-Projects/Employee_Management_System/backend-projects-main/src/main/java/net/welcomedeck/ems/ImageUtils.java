package net.welcomedeck.ems;



import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.Deflater;
import java.util.zip.DeflaterOutputStream;
import java.util.zip.Inflater;
import java.util.zip.InflaterInputStream;

public class ImageUtils {
    public static byte[] compressImage(byte[] imageData) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try(DeflaterOutputStream deflaterOutputStream = new DeflaterOutputStream(outputStream, new Deflater())){
            deflaterOutputStream.write(imageData);
        }
        return outputStream.toByteArray();
    }

    public static byte[] decompressImage(byte[] compressedImageData) throws IOException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        try(InflaterInputStream inflaterInputStream = new InflaterInputStream(new ByteArrayInputStream(compressedImageData), new Inflater())) {
            byte[] buffer = new byte[1024];
            int byteRead;
            while ((byteRead = inflaterInputStream.read(buffer)) > 0) {
                outputStream.write(buffer, 0, byteRead);
            }
        }
        return outputStream.toByteArray();
    }
}
