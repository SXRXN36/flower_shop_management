const Flower = require("../models/flowerModel");

exports.getFlowers = (req, res) => {
    Flower.getAllFlowers((err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

exports.addFlower = (req, res) => {

    const flower = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    };

    Flower.addFlower(flower, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "เพิ่มดอกไม้สำเร็จ",
            id: result.insertId
        });

    });

};

exports.updateFlower = (req, res) => {

    const id = req.params.id;

    const flower = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    };

    Flower.updateFlower(id, flower, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "แก้ไขข้อมูลสำเร็จ"
        });

    });

};

exports.deleteFlower = (req, res) => {

    const id = req.params.id;

    Flower.deleteFlower(id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "ลบข้อมูลสำเร็จ"
        });

    });

};