#!/usr/bin/env node
"use strict";

var btoa = require("../node-btoa");
var str = process.argv[2];
console.log(btoa(str));
