const wrapAsync=require("../utills/wrapAsync.js")
const expressError = require("../utills/expressError.js");
const express=require("express");
const router=express.Router();
const {listingSchema, reviewSchema}=require("../schema.js");
const review=require("../models/review.js");

const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }else{
        next();
    }
};


router.post("/", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

listing.reviews.push(newReview); 

    await newReview.save();         
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

module.exports=router;