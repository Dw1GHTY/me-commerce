package com.mecommerce.backend.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.lang.runtime.ObjectMethods;
import java.util.List;


@AllArgsConstructor
@Document("products")
public class Product {
    @Id
    private String id;


    @Getter @Setter private String productId;   //lexically intuitive ID
    @Getter @Setter private String category;
    @Getter @Setter private double price;
    @Getter @Setter private double discount;
    @Getter @Setter private List<String> images;    //list of image urls for edgestore or amazon
    @Getter @Setter private int stock;
    @Getter @Setter private String description;
    @Getter @Setter private Object attributes;
}
