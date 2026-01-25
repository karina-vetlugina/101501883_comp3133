const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "input_countries.csv";
const canadaFile = "canada.txt";
const usaFile = "usa.txt";

// delete output files if they already exist
if (fs.existsSync(canadaFile)) {
  fs.unlinkSync(canadaFile);
}

if (fs.existsSync(usaFile)) {
  fs.unlinkSync(usaFile);
}

// write headers
fs.appendFileSync(canadaFile, "country,year,population\n");
fs.appendFileSync(usaFile, "country,year,population\n");

// read csv file
fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    const country = row.country.toLowerCase();

    if (country === "canada") {
      fs.appendFileSync(
        canadaFile,
        `${row.country},${row.year},${row.population}\n`
      );
    }

    if (country === "united states") {
      fs.appendFileSync(
        usaFile,
        `${row.country},${row.year},${row.population}\n`
      );
    }
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });