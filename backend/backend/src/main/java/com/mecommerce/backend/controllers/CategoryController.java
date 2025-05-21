package com.mecommerce.backend.controllers;


import com.mecommerce.backend.models.Category;
import com.mecommerce.backend.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
public class CategoryController {

    private final CategoryRepository categoryRepository;

    //ResponseEntity for status codes
    @GetMapping("/categories")
    public List<Category> getCategories(){
        return categoryRepository.findAll();
    }

}
