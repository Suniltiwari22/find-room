// const { Number } = require("joi");
// const { default: mongoose } = require("mongoose");

// const {Schema}=mongoose;

// main()
// .then(()=> console.log("connection succesfull"))
// .catch((err)=>console.log(err));

// async function main(){
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
// }

// const orderSchema=new Schema({
//     item:String,
//     price:number,
// });

// const customerSchema=new Schema({
//     name:String,
//     orders:[
//         {
//             type:Schema.Types.ObjectId,
//             ref:"order",
//         },
//     ],
// });

// const order=mongoose.model("order",orderSchema);
// const Custumer=mongoose.model("Customer",customerSchema);

// const findCustomer=async ()=>{
//     let result= await Custumer.find({}).populate("orders");
//     console.log(result[0]);

// };



const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main()
.then(() => console.log("connection successful"))
.catch(err => console.log(err));

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete",async(custumer)=>{
    if(custumer.orders.length){
        let res= await Order.deleteMany({$in:custumer.orders});
        console.log(res);
    }
});

const Order = mongoose.model("order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCust = async () => {
    let newCust = new Customer({
        name: "karan Arjun"
    });

    let newOrder = new Order({
        item: "pizza",
        price: 250,
    });

    await newOrder.save();  // ✅ save order first

    newCust.orders.push(newOrder._id); // ✅ correct field + ObjectId

    await newCust.save();

    console.log("Customer saved");
};

//  addCust();

const deleteData=async()=>{
    let data=await Order.findByIdAndDelete("69da73acaa0b64aeaa3563e7");
    console.log(data);
};
deleteData();



