const customerModel = require("../models/customerModel");


// GET CUSTOMERS
exports.getCustomers = async (req,res)=>{

    try{

        const data = await customerModel.getAllCustomers();

        res.json(data);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



// POST CUSTOMER
exports.addCustomer = async(req,res)=>{

    try{

        const result = await customerModel.addCustomer(
            req.body
        );


        res.json({

            message:"Customer added successfully",

            id:result.insertId

        });


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};