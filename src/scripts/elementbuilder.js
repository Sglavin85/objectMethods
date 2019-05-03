function buildElement (obj) {
    let div = document.createElement(`div`)
    let hr = document.createElement("hr")
    div.appendChild(hr)
    let salesPerson = document.createElement("h2")
    salesPerson.textContent = `${obj.sales_agent.first_name} ${obj.sales_agent.last_name}`
    div.appendChild(salesPerson)
    let phone  = document.createElement("p")
    phone.textContent = `Phone Number: ${obj.sales_agent.mobile}`
    div.appendChild(phone)
    let email = document.createElement("p")
    email.textContent = `E-Mail: ${obj.sales_agent.email}`
    let mostRecentSale = document.createElement("h3")
    mostRecentSale.textContent = `Vehicle: ${obj.vehicle.year} ${obj.vehicle.make} ${obj.vehicle.model}`
    div.appendChild(mostRecentSale)
    let saleProfit = document.createElement("h3")
    saleProfit.textContent = `Profit: $${obj.gross_profit}`
    div.appendChild(saleProfit)
    return div
}