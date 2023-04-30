import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type TrackDocument = Track & Document;
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  text: string;

  @Prop()
  listens: number;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop({type: [{type: ObjectId, ref: 'Comment'}]})
  comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);