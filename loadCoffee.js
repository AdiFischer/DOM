function getCoffee() {
fetch('https://api.samplesapis.com/coffee/hot')
.then(Response => Response.json())
.then(displayCoffees)
.catch(console.error)
}

function displayCoffees(coffeeList) {
    const main = document.getElementById('main')
    coffeeList.map(coffee => {
        const node = document.createElement("p")
        const textnode = document.createTextNode(coffee.title);
        node.appendChild(textnode);
        main.appendChild(node);

    })
}
getCoffee()