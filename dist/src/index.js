"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("../Routes/route"));
const app = (0, express_1.default)();
const port = process.env.port || 2001;
app.use(express_1.default.json());
require("../Config/config");
app.all("/", (res) => {
    res.json({
        message: "running",
    });
});
app.use((0, cors_1.default)());
app.use("/api", route_1.default);
app.listen(port, () => {
    console.log("done on port", port);
});
