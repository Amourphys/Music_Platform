import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Track } from 'src/track/schemas/track.schema';

export type TrackDocument = Album & Document;
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema() 
export class Album {
    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    picture: string;

    @Prop({type: [{type: ObjectId, ref: 'Track'}]})
    tracks: Track[];
}