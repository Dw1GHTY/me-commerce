package com.mecommerce.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mecommerce.backend.models.Category;
import com.mecommerce.backend.repository.CategoryRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
public class CategoryController {

    private final CategoryRepository categoryRepository;

    //ResponseEntity for status codes
    @GetMapping("/categories")
    public List<Category> getCategories() {
        List<Category> cat = categoryRepository.findAll();
        return cat;
    }

}
