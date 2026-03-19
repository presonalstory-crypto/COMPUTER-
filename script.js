document.getElementById("admissionForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const data = {
        name: name.value,
        mobile: mobile.value,
        course: course.value
    };

    const res = await fetch("http://localhost:3000/save", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });

    const result = await res.json();
    msg.innerText = result.message;
});