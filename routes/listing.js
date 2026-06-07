const express=require("express");
const router=express.Router();
const wrapAsync=require("../utills/wrapAsync.js")
const expressError = require("../utills/expressError.js");
const {listingSchema, reviewSchema}=require("../schema.js");
const Listing=require("../models/listing.js");
const {isLoggedIn}=require("../routes/middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });


const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }else{
        next();
    }
};


//Index Route
router.get("/",wrapAsync(listingController.index));

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//Show Route

router
.route("/")
    .get(wrapAsync(listingController.index))

    router.get(
    "/:id",
    wrapAsync(listingController.showListing)
);
  

//  Create Route
router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.single("listing[image]"),
     validateListing,
    wrapAsync(listingController.createListing)
);


//Edit Route 
router.get("/:id/edit",listingController.renderEditForm);

//Update Route
router.put("/:id",isLoggedIn,listingController.updateListing);


//Delete Route
router.delete("/:id",isLoggedIn,listingController.deleteListing);

module.exports=router;