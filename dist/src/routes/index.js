"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const example_controller_1 = __importDefault(require("../controller/example.controller"));
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.use("/example", middleware_1.exampleRateLimit, example_controller_1.default.getAllData);
exports.default = router;
