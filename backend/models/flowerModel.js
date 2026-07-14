const db = require("../config/db");


// GET ALL FLOWERS
const getAllFlowers = async () => {
    const [rows] = await db.query(
        "SELECT * FROM flowers"
    );

    return rows;
};


// ADD FLOWER
const addFlower = async (flower) => {

    const sql = `
        INSERT INTO flowers (name, price, stock)
        VALUES (?, ?, ?)
    `;

    const [result] = await db.query(
        sql,
        [
            flower.name,
            flower.price,
            flower.stock
        ]
    );

    return result;
};


// UPDATE FLOWER
const updateFlower = async (id, flower) => {

    const sql = `
        UPDATE flowers
        SET name = ?, price = ?, stock = ?
        WHERE id = ?
    `;

    const [result] = await db.query(
        sql,
        [
            flower.name,
            flower.price,
            flower.stock,
            id
        ]
    );

    return result;
};


// DELETE FLOWER
const deleteFlower = async (id) => {

    const [result] = await db.query(
        "DELETE FROM flowers WHERE id = ?",
        [id]
    );

    return result;
};


module.exports = {
    getAllFlowers,
    addFlower,
    updateFlower,
    deleteFlower
};