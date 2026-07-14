const flowerModel = require("../models/flowerModel");


// GET ALL
exports.getFlowers = async (req, res) => {
    try {

        const data = await flowerModel.getAllFlowers();

        res.json(data);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};


// POST ADD
exports.addFlower = async (req, res) => {
    try {

        const result = await flowerModel.addFlower(req.body);

        res.json({
            message: "Flower added successfully",
            id: result.insertId
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};


// PUT UPDATE
exports.updateFlower = async (req, res) => {

    try {

        const { id } = req.params;

        await flowerModel.updateFlower(
            id,
            req.body
        );

        res.json({
            message: "Flower updated successfully"
        });


    } catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};


// DELETE
exports.deleteFlower = async (req,res)=>{

    try {

        const {id}=req.params;


        await flowerModel.deleteFlower(id);


        res.json({
            message:"Flower deleted successfully"
        });


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};