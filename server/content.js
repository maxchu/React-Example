"use strict";

let obj = require('./data.json');
let getContent = (req, res) => {
  res.json(obj);
}

exports.getContent = getContent;
