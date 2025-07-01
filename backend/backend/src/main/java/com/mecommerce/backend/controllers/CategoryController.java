package com.mecommerce.backend.controllers;


import com.mecommerce.backend.models.Category;
import com.mecommerce.backend.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RestController
public class CategoryController {

    private final CategoryRepository categoryRepository;

    //ResponseEntity for status codes
    @GetMapping("/categories")
    public List<Category> getCategories(){
        List<Category> cat = categoryRepository.findAll();
        return cat;
    }

    @GetMapping("/api/categories")
    public List<Category> getCategoriesBySearch(@RequestParam("q") String query) {
        if (query == null || query.isEmpty()) {
            return new ArrayList<>();
        }
        String pattern = ".*" + query.toLowerCase() + ".*";
        return categoryRepository.findByNameRegex(pattern);
    }

}
