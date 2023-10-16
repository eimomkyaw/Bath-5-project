package com.example.bootcrud.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
   // @NotEmpty(message = "Please fill title.")
    private String title;
   // @NotEmpty(message = "Please fill price.")
    private double price;
   // @NotEmpty(message = "please fill image Url.")
    private String imageUrl;
   // @NotEmpty(message = "Please fill publisher.")
    private String publisher;

    @ManyToOne
    private Author author;
}










