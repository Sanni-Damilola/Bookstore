"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Praticebooks", Schema);
