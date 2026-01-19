//Fetch API(Application Programming Interface)

let factPara = document.querySelector("#factPara");
let btn = document.querySelector("#btn");

const url = "https://cat-fact.herokuapp.com/facts";

let getFacts= async()=>{
        console.log("Getting Data...");
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        console.log(data)
        factPara.innerText = data[0].text;
};
// getFacts();
btn.addEventListener("click", getFacts);

// function getFacts(){
//         fetch(url).then((response)=>{
//                 return response.json()
//         }).then((data)=>{
//                 factPara.innerText = data[1].text;
//         })
// };