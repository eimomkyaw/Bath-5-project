package com.example.bootcrud.controller;

import com.example.bootcrud.dao.AuthorDao;
import com.example.bootcrud.dao.BookDao;
import com.example.bootcrud.entity.Author;
import com.example.bootcrud.entity.Book;
import com.example.bootcrud.service.BookService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BookController {
   private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping("/update/author")
    public String updateAuthor(@RequestParam("id")int id,Model model){
        model.addAttribute("author",bookService.findAuthorById(id));
        this.id=id;
        return "update-author";
    }
    int id;
    @PostMapping("/save-update")
    public String saveUpdate(@Valid Author author,BindingResult result){
        if(result.hasErrors()){
            return "update-author";

        }
        bookService.updateAuthorV1(id,author);
        return "redirect:/authors";
    }

    @PostMapping("/save-update/v2")
    public String saveUpdateV2(@Valid Author author,BindingResult result){
        if (result.hasErrors()){
            return "update-author";

        }
        author.setId(id);
        bookService.updateAuthorV2(author);
        return "redirect:/authors";
}
@GetMapping("update/book")
public String updateBook(@RequestParam("id")int id,Model model){
        model.addAttribute("book",bookService.findBookById(id));
        this.id=id;
        //book.setAuthor(bookService.findAuthorById(book.getAuthor().getId()));
        return "update-book";
}

@PostMapping("save-update/book")
public String saveBookUpdate(@Valid Book book,BindingResult result ){
        if (result.hasErrors()){
            return "update-book";
        }
        //book.setAuthor(bookService.findAuthorById(book.getAuthor().getId()));
        book.setId(id);
        bookService.updateBook(book);
        return "redirect:/books";
}


    @GetMapping("/author-form")
    public String authorForm(Model model){
        model.addAttribute("author",new Author());
        return "author-form";
    }
    @PostMapping("/author-form")
    public String saveAuthor(@Valid Author author, BindingResult result){
        if(result.hasErrors()){
            return "author-form";
        }
        bookService.saveAuthor(author);
        return "redirect:/authors";
    }
    @RequestMapping("/authors")
    public String listAuthors(Model model){
        model.addAttribute("authors",bookService.listAuthors());
        return "authors";
    }
    @GetMapping("delete/author")
    public String removeAuthor(@RequestParam("id")int id){
        bookService.removeAuthor(id);
        return "redirect:/authors";
    }

    @GetMapping("delete/book")
    public String deleteBook(@RequestParam("id")int id){
        bookService.deleteBook(id);
        return "redirect:/books";
    }




    @GetMapping({"/home"})
    public String home(){
        return "author-form";
    }

@GetMapping("/book-form")
    public String bookForm(Model model){
        model.addAttribute("book",new Book());
        model.addAttribute("authors",bookService.listAuthors());


        return "pages/book-form";
    }
    @PostMapping("/save-book")
    public String saveBook(@Valid Book book,BindingResult result){
        if (result.hasErrors()){
            return "pages/book-form";
        }
       book.setAuthor(bookService.findAuthorById(book.getAuthor().getId()));
         bookService.saveBook(book);
    return "redirect:/books";
    }

    @GetMapping("/books")
    public String findAllBooks(Model model){
        model.addAttribute("books",bookService.findAllBook());
        return "book-list";
    }
}
