package com.mecommerce.backend.repository;

import com.mecommerce.backend.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    public List<Product> findAll();
}
