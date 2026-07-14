const orderModel = require("../models/orderModel");


// GET

exports.getOrders = async(req,res)=>{

    try{

        const data =
        await orderModel.getAllOrders();


        res.json(data);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



// POST

exports.addOrder = async(req,res)=>{

    try{

        const result =
        await orderModel.addOrder(req.body);


        res.json({

            message:"Order created successfully",

            id:result.insertId

        });


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};