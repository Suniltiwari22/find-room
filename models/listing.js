const mongoose = require("mongoose");
const Review = require("./review");   // ✅ correct naming
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: String,

  image: {
    url:String,
    filename:String,
  },

  price: {
    type: Number,
    min: 0   // ✅ validation (good practice)
  },

  location: String,
  country: String,

  reviews: [   // ✅ plural
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;