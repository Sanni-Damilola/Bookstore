import { Request, Response } from "express";
import mongoose from "mongoose";

interface data {
  author: string;
  authoreImage: string;
  summary: string;
  category: string;
  ISBN: string;
  views: [];
  title: string;
  coverImage: string;
}

interface Idata extends data, mongoose.Document {}

const Schema = new mongoose.Schema(
  {
    author: {
      type: String,
    },
    authoreImage: {
      type: String,
    },
    summary: {
      type: String,
    },
    category: {
      type: String,
    },
    ISBN: {
      type: String,
    },
    views: {
      type: [],
    },
    title: {
      type: String,
    },
    coverImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Idata>("Praticebooks", Schema);
