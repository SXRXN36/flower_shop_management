const db = require("../config/db");


// GET ORDERS
const getAllOrders = async()=>{

    const [rows] = await db.query(`
        SELECT 
        orders.id,
        customers.name AS customer_name,
        orders.order_date,
        orders.total_price

        FROM orders

        JOIN customers
        ON orders.customer_id = customers.id
    `);

    return rows;
};



// CREATE ORDER
const addOrder = async(order)=>{

    const sql = `
        INSERT INTO orders
        (customer_id,total_price)
        VALUES (?,?)
    `;


    const [result] = await db.query(
        sql,
        [
            order.customer_id,
            order.total_price
        ]
    );


    return result;
};


module.exports={
    getAllOrders,
    addOrder
};