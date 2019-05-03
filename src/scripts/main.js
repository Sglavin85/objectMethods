const $container = document.querySelector(".container")
const $ex2 = document.querySelector("#ex2")


//list all the cars using the forEach Method
$container.innerHTML += `<h1>Car List</h1>`
allCars.forEach(car => {
    $container.innerHTML += `<hr>`
    for (const entry of Object.entries(car)) {
        $container.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})


//listing sales by agent using the For Of loop and object.entries
const weeklySales = document.createDocumentFragment()
$ex2.innerHTML += `<h1>Weekly Sale</h1>`
salesByWeek.forEach(sale => {
    let saleTicket = document.createElement("div")
    let hr = document.createElement("hr")
    saleTicket.appendChild(hr)
    let salesPerson = document.createElement("h2")
    salesPerson.textContent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`
    saleTicket.appendChild(salesPerson)
    for(const entry of Object.entries(sale.vehicle)) {
        let vehicleInfo = document.createElement("p")
        vehicleInfo.className = "vehicle"
        vehicleInfo.textContent = `${entry[0]}: ${entry[1]}`
        saleTicket.appendChild(vehicleInfo)
    }
    let profit = document.createElement("h3")
    profit.textContent = `Profit: $${sale.gross_profit}`
    saleTicket.appendChild(profit)
    weeklySales.appendChild(saleTicket)
})
$ex2.appendChild(weeklySales)

//creates a search function
const searchInput = document.querySelector("#searchInput")
const ex3 = document.querySelector("#ex3")
function checkForMatch(array, string, obj, frag) {
    let lowerArray =  array.toLocaleString().toLowerCase().split(',');
    console.log(lowerArray)
    console.log(lowerArray.includes(string))
        if (lowerArray.includes(string) === true) {
            let el = buildElement(obj)
            frag.appendChild(el)
            ex3.appendChild(frag)
        }
    }
searchInput.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        let queryReturn = document.createDocumentFragment()
        const searchTerm = event.currentTarget.value.toLowerCase()
        salesByWeek.forEach(sale => {
            let saleCheck = Object.values(sale)
            let vehicleCheck = Object.values(sale.vehicle)
            let salesMan = Object.values(sale.sales_agent)
            checkForMatch(saleCheck, searchTerm, sale, queryReturn)
            checkForMatch(vehicleCheck, searchTerm, sale, queryReturn)
            checkForMatch(salesMan, searchTerm, sale, queryReturn)
        })
    }
})
