package com.example.bootcrud.service;

import com.example.bootcrud.dao.AuthorDao;
import com.example.bootcrud.dao.BookDao;
import com.example.bootcrud.entity.Author;
import com.example.bootcrud.entity.Book;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookDao bookDao;
    private final AuthorDao authorDao;

    public BookService(BookDao bookDao, AuthorDao authorDao) {
        this.bookDao = bookDao;
        this.authorDao = authorDao;
    }

    @Transactional
    public void saveBook(Book book){
       Author author= book.getAuthor();
       author.addBook(book);
       bookDao.save(book);

    }

    public List<Book>findAllBook(){
        return bookDao.findAll();
    }

    public void saveAuthor(Author author){
        authorDao.save(author);
    }
    public List<Author> listAuthors(){
        return authorDao.findAll();
    }
    public Author findAuthorById(int id){
        return authorDao.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public Book findBookById(int id){
        return bookDao.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public void removeAuthor( int id){
    authorDao.deleteById(id);
    }

    public void deleteBook(int id){
        bookDao.deleteById(id);
    }

    @Transactional
    public void updateAuthorV1(int id,Author author){
        Author existiingAuthor=authorDao.findById(id)
                .orElseThrow(EntityNotFoundException::new);
        existiingAuthor.setBooks(author.getBooks());
        existiingAuthor.setName(author.getName());
        existiingAuthor.setAddress(author.getAddress());
        existiingAuthor.setPhoneNumber(author.getPhoneNumber());
        existiingAuthor.setDateOfBirth(author.getDateOfBirth());
    }

    public void updateAuthorV2(Author author){
        authorDao.saveAndFlush(author);
    }

    public void updateBook(Book book){
        bookDao.saveAndFlush(book);
    }


}
