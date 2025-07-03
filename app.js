const Base_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies"

const dropdown = document.querySelectorAll(".dropdown select");
const fromcurr = document.querySelector(".From select")
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const btnConvert = document.querySelector("form button");

const UpdateExchangeRate = async () =>{
    let amount = document.querySelector(".amount input");
    let amountvalue = amount.value;
    if(amountvalue === "" || amountvalue <= 0){
        amountvalue = 1; 
        amount.value = amountvalue;
    }
    console.log(amountvalue);
    console.log(tocurr.value);
    console.log(fromcurr.value);
    let URL =`${Base_URL}/${fromcurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    let data = await response.json();
    let from = fromcurr.value.toLowerCase();
    let to = tocurr.value.toLowerCase();
    let rate = data[from][to];
    console.log(data[from][to]);

    msg.innerText = `1 ${fromcurr.value} = ${rate} ${tocurr.value}`;    
}



window.addEventListener("load",() =>{
    UpdateExchangeRate();
})

for (select of dropdown) {
    for(currCode in countryList){
    let newOptions = document.createElement("option");
    newOptions.innerText = currCode;
    newOptions.value = currCode;
    select.append(newOptions);
    if(select.name === "from" && currCode == "USD"){
        newOptions.selected = "selected"; 
    }
    else if(select.name === "To" && currCode == "INR"){
        newOptions.selected = "selected"; 
    }
    }

    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    });
}


const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img").src = newsrc;
}

btnConvert.addEventListener("click", async (evt) => {
    evt.preventDefault();
    UpdateExchangeRate();
    
})


