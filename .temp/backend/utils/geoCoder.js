"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_geocoder_1 = require("node-geocoder");
//const NodeGeocoder = require("node-geocoder");
var options = {
    provider: process.env.GEOCODER_PROVIDER,
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null,
};
var geoCoder = (0, node_geocoder_1.default)(options);
exports.default = geoCoder;
