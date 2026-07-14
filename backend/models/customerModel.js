const db = require("../config/db");


// GET ALL CUSTOMERS
const getAllCustomers = async () => {

    const [rows] = await db.query(
        "SELECT * FROM customers"
    );

    return rows;
};


// ADD CUSTOMER
const addCustomer = async (customer) => {

    const sql = `
        INSERT INTO customers
        (name, phone, email, address)
        VALUES (?, ?, ?, ?)
    `;


    const [result] = await db.query(
        sql,
        [
            customer.name,
            customer.phone,
            customer.email,
            customer.address
        ]
    );


    return result;
};


module.exports = {
    getAllCustomers,
    addCustomer
};