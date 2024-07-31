const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Your app is listening on port ${port}`));
