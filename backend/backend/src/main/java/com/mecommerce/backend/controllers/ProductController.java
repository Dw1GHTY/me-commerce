package com.mecommerce.backend.controllers;


import com.mecommerce.backend.models.Product;
import com.mecommerce.backend.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class ProductController {
    private final ProductRepository productRepository;

    @GetMapping("/products")
    public ResponseEntity<Iterable<Product>> getAllProducts(){
        var products = productRepository.findAll();
        if(products == null){
            return  ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(products);

    }

}
