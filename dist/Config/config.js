"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb://localhost/Praticebooks";
const clouldurl = "mongodb+srv://sannidatabase:sannidatabase@cluster0.zh68ie9.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default.connect(url);
mongoose_1.default.connection
    .on("open", () => {
    console.log("connected to", clouldurl);
})
    .once("error", (err) => {
    console.log("An error ocurred", err);
});
