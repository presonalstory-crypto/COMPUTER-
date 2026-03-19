async function loadData(){
    const res = await fetch("http://localhost:3000/students");
    const students = await res.json();

    let html = "";

    students.forEach((s,i)=>{
        html += `
        <tr>
            <td>${s.name}</td>
            <td>${s.mobile}</td>
            <td>${s.course}</td>
            <td><button onclick="del(${i})">Delete</button></td>
        </tr>`;
    });

    document.getElementById("data").innerHTML = html;
}

async function del(id){
    await fetch("http://localhost:3000/delete/"+id, {method:"DELETE"});
    loadData();
}

loadData();