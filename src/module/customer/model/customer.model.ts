import { Prop, SchemaFactory } from '@nestjs/mongoose';
export class CustomerModel {
  @Prop()
  firstName?: string;
  @Prop()
  lastName?: string;
  @Prop({ default: new Date() })
  createdAt: Date;
  @Prop({ default: new Date() })
  updatedAt: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(CustomerModel);
