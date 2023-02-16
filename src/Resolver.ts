import { Mutation, Query, Resolver, Arg } from "type-graphql";
import { Book } from './models/User';
import { UserMongo } from "../mongodb/database";
import { createBook, editBook } from "./inputs/createBook";
import { StringDecoder } from "string_decoder";



@Resolver()
  export class userResolvers {
    @Query(() => Book)
      async byDate(@Arg("date") date: string) {
        const checkthis = await UserMongo.findOne({ date: date });
        if (checkthis) { 
          return checkthis
        } 
        else throw new Error("Date not found") 
    };


    
    @Mutation(()=> Book)
      async createNewBook(
        @Arg('createNewBook') createNewBookObject: createBook) {
          const { date, open, max, min, close, priceAjst, volume } = createNewBookObject;
          return await UserMongo.create(
            { date,
              open,
              max,
              min,
              close,
              priceAjst,
              volume }
          );
      }
     

      @Mutation(() => Book)
      async editBook(@Arg("editBookObject") editBookObject: editBook) {
        const { date, open, max, min, close, priceAjst, volume } = editBookObject;
      
        const update = {
          open,
          max,
          min,
          close,
          priceAjst,
          volume
        };
      
        return await UserMongo.findOneAndUpdate({ date }, update, { new: true })
      
      
      }
      

    @Mutation(()=> String)
      async removeFromBook(@Arg("date") date: string) {
        const existingBook = await UserMongo.findOne({ date: date })
        if (existingBook) {
        await UserMongo.deleteOne({ date: date})
        return "Date deleted"}
        else return "Date not found"
      };
  }