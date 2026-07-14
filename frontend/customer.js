let customers = JSON.parse(localStorage.getItem("customers")) || [];

function saveCustomers() {
    localStorage.setItem("customers", JSON.stringify(customers));
}

function showCustomers() {

    const table = document.getElementById("customerTable");
    table.innerHTML = "";

    customers.forEach((customer, index) => {

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>👤 ${customer.name}</td>
            <td>📞 ${customer.phone}</td>
            <td>
                <button class="edit" onclick="editCustomer(${index})">✏️</button>
                <button class="delete" onclick="deleteCustomer(${index})">🗑️</button>
            </td>
        </tr>
        `;

    });

}

function addCustomer() {

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();

    if (name === "" || phone === "") {
        alert("🌸 กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    customers.push({
        name: name,
        phone: phone
    });

    saveCustomers();
    showCustomers();

    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";

    alert("✅ เพิ่มลูกค้าเรียบร้อย");

}

function editCustomer(index) {

    const newName = prompt("ชื่อลูกค้า", customers[index].name);
    if (newName === null) return;

    const newPhone = prompt("เบอร์โทรศัพท์", customers[index].phone);
    if (newPhone === null) return;

    customers[index] = {
        name: newName,
        phone: newPhone
    };

    saveCustomers();
    showCustomers();

    alert("✏️ แก้ไขข้อมูลเรียบร้อย");

}

function deleteCustomer(index) {

    if (confirm("ต้องการลบลูกค้าคนนี้ใช่หรือไม่?")) {

        customers.splice(index, 1);

        saveCustomers();
        showCustomers();

    }

}

showCustomers();