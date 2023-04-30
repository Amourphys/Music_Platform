import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = Comment & Document;
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema()
export class Comment {
    @Prop()
    username: string;

    @Prop()
    text: string;

    @Prop({type: ObjectId, ref: 'Track'})
    track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);