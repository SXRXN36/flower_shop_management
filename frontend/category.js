let categories = JSON.parse(localStorage.getItem("categories")) || [];

function saveCategory() {
    localStorage.setItem("categories", JSON.stringify(categories));
}

function showCategories() {

    const table = document.getElementById("categoryTable");
    table.innerHTML = "";

    categories.forEach((category, index) => {

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>🌼 ${category.name}</td>
            <td>
                <button class="edit" onclick="editCategory(${index})">✏️</button>
                <button class="delete" onclick="deleteCategory(${index})">🗑️</button>
            </td>
        </tr>
        `;

    });

}

function addCategory() {

    const name = document.getElementById("categoryName").value.trim();

    if (name === "") {
        alert("🌸 กรุณากรอกชื่อหมวดหมู่");
        return;
    }

    categories.push({
        name: name
    });

    saveCategory();
    showCategories();

    document.getElementById("categoryName").value = "";

    alert("✅ เพิ่มหมวดหมู่เรียบร้อย");

}

function editCategory(index) {

    const newName = prompt("แก้ไขชื่อหมวดหมู่", categories[index].name);

    if (newName === null || newName.trim() === "") return;

    categories[index].name = newName;

    saveCategory();
    showCategories();

    alert("✏️ แก้ไขข้อมูลเรียบร้อย");

}

function deleteCategory(index) {

    if (confirm("ต้องการลบหมวดหมู่นี้ใช่หรือไม่?")) {

        categories.splice(index, 1);

        saveCategory();
        showCategories();

    }

}

showCategories();