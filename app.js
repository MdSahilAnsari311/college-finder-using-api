// college-finder-using-api
let btn = document.querySelector("button");
let url4 = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colArr = await getCollege(country);
    console.log(colArr);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(let col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country){
    try{
        let res = await axios.get(url4+country);
        return res.data;
    }catch(err){
        console.log("error =", err);
    }
}