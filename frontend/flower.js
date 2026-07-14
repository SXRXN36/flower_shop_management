const API_URL = "http://172.29.61.26:3000/api/flowers";

let flowers = [];


// โหลดข้อมูลจาก API

async function loadFlowers(){

    try{

        const res = await fetch(API_URL);

        flowers = await res.json();

        showFlowers();

    }catch(error){

        console.error(error);

        alert("เชื่อมต่อ API ไม่ได้");

    }

}


// แสดงข้อมูล

function showFlowers(){

    const container = document.getElementById("flowerTable");

    container.innerHTML = "";


    flowers.forEach((flower,index)=>{


        container.innerHTML += `

        <div class="flower-card">

            <h3>
                🌸 ${flower.name}
            </h3>


            <p>
                💰 ราคา ${flower.price} บาท
            </p>


            <p>
                📦 คงเหลือ ${flower.stock}
            </p>


            <button 
            class="delete"
            onclick="deleteFlower(${index})">

                🗑️ ลบ

            </button>


        </div>

        `;


    });

}



// เพิ่มดอกไม้

async function addFlower(){


    const name =
    document.getElementById("flowerName").value;


    const price =
    document.getElementById("flowerPrice").value;


    const stock =
    document.getElementById("flowerStock").value;



    if(name==="" || price==="" || stock===""){

        alert("กรุณากรอกข้อมูลให้ครบ");

        return;

    }



    await fetch(API_URL,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },


        body:JSON.stringify({

            name:name,

            price:Number(price),

            stock:Number(stock)

        })

    });



    alert("เพิ่มดอกไม้สำเร็จ");


    document.getElementById("flowerName").value="";
    document.getElementById("flowerPrice").value="";
    document.getElementById("flowerStock").value="";


    loadFlowers();

}




// ลบดอกไม้

async function deleteFlower(index){


    const id = flowers[index].id;


    if(confirm("ต้องการลบดอกไม้นี้ใช่หรือไม่?")){


        await fetch(

            `${API_URL}/${id}`,

            {

                method:"DELETE"

            }

        );


        loadFlowers();

    }

}



loadFlowers();