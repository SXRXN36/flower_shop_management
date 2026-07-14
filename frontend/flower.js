let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

function saveData() {
    localStorage.setItem("flowers", JSON.stringify(flowers));
}

function showFlowers() {

    const table = document.getElementById("flowerTable");
    table.innerHTML = "";

    flowers.forEach((flower, index) => {

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>🌸 ${flower.name}</td>
            <td>${flower.price} บาท</td>
            <td>${flower.stock}</td>
            <td>
                <button class="edit" onclick="editFlower(${index})">✏️</button>
                <button class="delete" onclick="deleteFlower(${index})">🗑️</button>
            </td>
        </tr>
        `;

    });

}

function addFlower() {

    const name = document.getElementById("flowerName").value.trim();
    const price = document.getElementById("flowerPrice").value;
    const stock = document.getElementById("flowerStock").value;

    if (name === "" || price === "" || stock === "") {
        alert("🌼 กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    flowers.push({
        name: name,
        price: price,
        stock: stock
    });

    saveData();
    showFlowers();

    document.getElementById("flowerName").value = "";
    document.getElementById("flowerPrice").value = "";
    document.getElementById("flowerStock").value = "";

    alert("🌸 เพิ่มข้อมูลสำเร็จ");
}

function deleteFlower(index) {

    if (confirm("ต้องการลบดอกไม้นี้ใช่หรือไม่?")) {

        flowers.splice(index, 1);

        saveData();
        showFlowers();

    }

}

function editFlower(index) {

    const flower = flowers[index];

    const newName = prompt("ชื่อดอกไม้", flower.name);
    if (newName === null) return;

    const newPrice = prompt("ราคา", flower.price);
    if (newPrice === null) return;

    const newStock = prompt("จำนวน", flower.stock);
    if (newStock === null) return;

    flowers[index] = {
        name: newName,
        price: newPrice,
        stock: newStock
    };

    saveData();
    showFlowers();

    alert("✏️ แก้ไขข้อมูลเรียบร้อย");

}

showFlowers();