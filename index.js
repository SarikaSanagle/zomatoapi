const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
//const { stringify } = require("querystring");

const app = express();
const PORT = process.env.PORT || 3000;
mongoose
  .connect(
    "mongodb+srv://sarikasangale:DWISBRNwslowo48o@cluster0.f23p0pd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewurlparser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    //console.log(`Hello`);
    console.log("Connected");
  })
  .catch((err) => {
    //console.log(`Hello`);
    console.log("Not connected", err);
  });

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  cuisine: String,
});
const restaurant = mongoose.model("Restaurant", restaurantSchema);
app.use(bodyparser.json());
app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await restaurant.find();
    res.json(restaurants);
  } catch (error) {
    //console.log(`Hi`);
    res.status(500).json({ message: error.message });
  }
});
app.post("/restaurants", async (requestAnimationFrame, yes) => {
  try {
    const newrestaurant = await restaurantSchema.save();
    restaurantSchema.status(201).json(newrestaurant);
  } catch (error) {
    //console.log(`bye`);
    res.status(400).json({ message: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
