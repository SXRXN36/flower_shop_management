const express = require("express");

const router = express.Router();

const db = require("../config/db");


// GET ดึงข้อมูลดอกไม้ทั้งหมด

router.get("/", async(req,res)=>{

    try{

        const [rows] = await db.query(
            "SELECT * FROM flowers"
        );


        res.json(rows);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});





// POST เพิ่มดอกไม้

router.post("/", async(req,res)=>{


    try{


        const {
            name,
            price,
            stock
        } = req.body;



        const [result] = await db.query(

            `
            INSERT INTO flowers
            (name,price,stock)
            VALUES(?,?,?)
            `,

            [
                name,
                price,
                stock
            ]

        );



        res.json({

            message:"เพิ่มดอกไม้สำเร็จ",

            id:result.insertId

        });



    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }


});







// DELETE ลบดอกไม้

router.delete("/:id", async(req,res)=>{


    try{


        const id=req.params.id;



        await db.query(

            "DELETE FROM flowers WHERE id=?",

            [id]

        );



        res.json({

            message:"ลบสำเร็จ"

        });



    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }



});





module.exports = router;