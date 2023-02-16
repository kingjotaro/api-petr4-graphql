import { Field, InputType, } from "type-graphql";


@InputType()
export class createBook {
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

@InputType()
export class editBook {
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
