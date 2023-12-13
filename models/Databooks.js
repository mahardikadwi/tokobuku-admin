// Databooks.js
import { Schema, model, models } from "mongoose";

const ModelSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
});

export const Databooks = models.Databooks || model('Databooks', ModelSchema);
