"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.views = exports.getOne = exports.deletedata = exports.getAll = exports.search = exports.postData = void 0;
const cloudinary_1 = __importDefault(require("../Config/cloudinary"));
const schema_1 = __importDefault(require("../Model/schema"));
const postData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        const { summary, author, category, title, views } = req.body;
        const secureImage = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const createdata = yield schema_1.default.create({
            author,
            summary,
            category,
            ISBN: `${isbn1}-${isbn3}-${isbn2}-${isbn4}`,
            title,
            views,
            authoreImage: author.charAt(0).toUpperCase(),
            coverImage: secureImage.secure_url,
        });
        return res.status(200).json({
            message: "Successully posted data",
            data: createdata,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "An error coccured",
            error: error,
        });
    }
});
exports.postData = postData;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alldata = yield schema_1.default.find();
        return res.status(201).json({
            message: "Successfully gotten all data",
            data: alldata,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error coccured",
            error: error,
        });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const onlyOne = yield schema_1.default.findById(req.params.id);
        return res.status(201).json({
            message: "Successfully gotten id " + req.params.id,
            data: onlyOne,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error coccured",
            error: error,
        });
    }
});
exports.getOne = getOne;
const views = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const setviews = yield schema_1.default.findByIdAndUpdate(req.params.id, {
            $push: { views: req.body.ip },
        }, {
            new: true,
        });
        return res.status(201).json({
            data: setviews,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error coccured",
            error: error,
        });
    }
});
exports.views = views;
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const makesearch = req.query;
        const searchbook = yield schema_1.default.find(makesearch);
        return res.status(201).json({
            message: "Data found",
            data: searchbook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error coccured",
            error: error,
        });
    }
});
exports.search = search;
const deletedata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletealall = yield schema_1.default.deleteMany();
        return res.status(201).json({
            message: "Successfully deleted",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An occured",
            data: error,
        });
    }
});
exports.deletedata = deletedata;
