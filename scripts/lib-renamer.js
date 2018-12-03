const fs = require("fs-extra");

// Async with promises:
fs.copy("./dist/vlh-forms.umd.min.js", "./dist/vlh-forms.js")
  .then(() => console.log("success!"))
  .catch(err => console.error(err));
