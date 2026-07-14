const db = require("../config/db");

const getAllFlowers = (callback) => {
    db.query("SELECT * FROM flowers", callback);
};

const addFlower = (flower, callback) => {
    const sql = `
        INSERT INTO flowers (name, price, stock)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [flower.name, flower.price, flower.stock],
        callback
    );
};

module.exports = {
    getAllFlowers,
    addFlower
};

const updateFlower = (id, flower, callback) => {
    const sql = `
        UPDATE flowers
        SET name = ?, price = ?, stock = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [flower.name, flower.price, flower.stock, id],
        callback
    );
};

const deleteFlower = (id, callback) => {
    db.query(
        "DELETE FROM flowers WHERE id = ?",
        [id],
        callback
    );
};

module.exports = {
    getAllFlowers,
    addFlower,
    updateFlower,
    deleteFlower
};