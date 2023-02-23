import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SiGunGuDocument = HydratedDocument<SiGunGu>;

@Schema()
export class SiGunGu {
  @Prop()
  _id: string;

  @Prop()
  B_name: string;

  @Prop()
  B_x: number;

  @Prop()
  B_y: number;

  @Prop()
  B_items: [];
}

export const SiGunGuSchema = SchemaFactory.createForClass(SiGunGu);
