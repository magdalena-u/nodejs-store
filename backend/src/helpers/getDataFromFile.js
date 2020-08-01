const fs = require("fs");

export const getDataFromFile = (pathToData, callback) =>
  fs.readFile(pathToData, (err, fileContent) => {
    if (err) {
      return callback([]);
    }

    return callback(JSON.parse(fileContent));
  });
