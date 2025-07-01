package com.mecommerce.backend.repository;

import com.mecommerce.backend.models.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CategoryRepository extends MongoRepository<Category, String> {
    public List<Category> findAll();

    @Query("{ 'name': { $regex: ?0, $options: 'i' } }")
    List<Category> findByNameRegex(String namePattern);
}
