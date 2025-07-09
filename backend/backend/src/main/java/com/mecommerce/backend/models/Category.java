package com.mecommerce.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Document("categories")
@Getter
@Setter
public class Category {

    @Id
    private String id;
    private String name;
    private String parentCategoryId;

}
