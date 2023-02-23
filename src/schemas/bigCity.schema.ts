import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { SiGunGu } from './SiGunGu.schema';

export type BigCityDocument = HydratedDocument<BigCity>;

@Schema()
export class BigCity {
  @Prop()
  _id: string;

  @Prop()
  A_name: string;

  @Prop()
  A_x: number;

  @Prop()
  A_y: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.String, ref: 'SiGunGu' }] })
  A_items: SiGunGu[];
}

export const BigCitySchema = SchemaFactory.createForClass(BigCity);
