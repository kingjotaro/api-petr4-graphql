import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Book {
  
  @Field()
  date: string;

  @Field()
  open: string;

  @Field()
  max: string;

  @Field()
  min: string;

  @Field()
  close: string;

  @Field()
  priceAjst: string;

  @Field()
  volume: string;
}


