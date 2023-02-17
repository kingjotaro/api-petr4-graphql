import { Mutation, Query, Resolver, Arg } from "type-graphql";
import { Book } from './models/User';
import { UserMongo } from "../mongodb/database";
import { createBook, editBook } from "./inputs/createBook";



@Resolver()

  export class userResolvers {
    
    @Query(() => Book)
      async byDate(@Arg("date") date: string) {
        let checkquery = await UserMongo.findOne({ date: date }); 
        if (checkquery) { 
          return checkquery
        } 
        else throw new Error("Date not found") 
    };


    @Mutation(()=> Book)
      async createNewBook(
        @Arg('createNewBook') createNewBookObject: createBook) {
          let checkcreate = await UserMongo.findOne({ date: createNewBookObject.date });
          if (checkcreate) {
            throw new Error('Date already exist, use edit instead');
  }
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
        let editCheck = await UserMongo.findOne({ date: editBookObject.date });
        if( editCheck) {
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
        throw new Error ("Date not found")
      }
      

    @Mutation(()=> String)
      async removeFromBook(@Arg("date") date: string) {
        let checkremove = await UserMongo.findOne({ date: date });
        if (checkremove) {
          await UserMongo.deleteOne({ date: date})
          return "Date deleted"}
        throw new Error ("Date not found")
      };
  }