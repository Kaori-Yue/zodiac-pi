"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const controllers_1 = require("./controllers");
const app = express_1.default();
const port = 3000;
app.use('/api', body_parser_1.default.json(), controllers_1.Zodiac);
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
