// import { Injectable } from "@nestjs/common";
// import { ReadingsRepository } from "src/data-access/repositories/readings.repository";
// import { BookModel } from "src/data-access/models/readings.model";

// @Injectable()
// export class BookService {
//   constructor(private readonly ReadingsRepository: ReadingsRepository) { }

//   getBooks(name?: string): Promise<BookModel[]> {
//     try {
//       return this.ReadingsRepository.getBooks(name);
//     } catch (error) {
//       const msg = `Error while getting all Books, error: ${error}`;
//       console.error(msg);
//       return Promise.reject(msg);
//     }
//   }

//   addBookToLibrary(
//     name: string,
//     author: string,
//     genre: string
//   ): Promise<BookModel> {
//     try {
//       return this.ReadingsRepository.addBook(name, author, genre);
//     } catch (error) {
//       const msg = `Error while creating book ${name}, error: ${error}`;
//       console.error(msg);
//       return Promise.reject(msg);
//     }
//   }
// }
