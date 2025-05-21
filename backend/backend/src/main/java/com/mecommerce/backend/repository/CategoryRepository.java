package com.mecommerce.backend.repository;

import com.mecommerce.backend.models.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CategoryRepository extends MongoRepository<Category, String> {
    public List<Category> findAll();
}
