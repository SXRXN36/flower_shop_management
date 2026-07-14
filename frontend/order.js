let orders = JSON.parse(localStorage.getItem("orders")) || [];

function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
}

function showOrders() {

    const table = document.getElementById("orderTable");
    table.innerHTML = "";

    orders.forEach((order, index) => {

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>👤 ${order.customer}</td>
            <td>🌹 ${order.flower}</td>
            <td>${order.quantity}</td>
            <td>
                <button class="edit" onclick="editOrder(${index})">✏️</button>
                <button class="delete" onclick="deleteOrder(${index})">🗑️</button>
            </td>
        </tr>
        `;

    });

}

function addOrder() {

    const customer = document.getElementById("customerName").value.trim();
    const flower = document.getElementById("flowerName").value.trim();
    const quantity = document.getElementById("quantity").value;

    if (customer === "" || flower === "" || quantity === "") {
        alert("🌸 กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    orders.push({
        customer: customer,
        flower: flower,
        quantity: quantity
    });

    saveOrders();
    showOrders();

    document.getElementById("customerName").value = "";
    document.getElementById("flowerName").value = "";
    document.getElementById("quantity").value = "";

    alert("🛒 เพิ่มคำสั่งซื้อเรียบร้อย");

}

function editOrder(index) {

    const newCustomer = prompt("ชื่อลูกค้า", orders[index].customer);
    if (newCustomer === null) return;

    const newFlower = prompt("ชื่อดอกไม้", orders[index].flower);
    if (newFlower === null) return;

    const newQuantity = prompt("จำนวน", orders[index].quantity);
    if (newQuantity === null) return;

    orders[index] = {
        customer: newCustomer,
        flower: newFlower,
        quantity: newQuantity
    };

    saveOrders();
    showOrders();

    alert("✏️ แก้ไขคำสั่งซื้อเรียบร้อย");

}

function deleteOrder(index) {

    if (confirm("ต้องการลบคำสั่งซื้อนี้ใช่หรือไม่?")) {

        orders.splice(index, 1);

        saveOrders();
        showOrders();

    }

}

showOrders();