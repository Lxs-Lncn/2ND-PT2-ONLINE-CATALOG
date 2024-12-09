fetch('Online Catalog.json') // Fetch the JSON file
    .then(res => {
        if (!res.ok) {
            console.error('Problem fetching JSON:', res.statusText);
            return;
        }
        return res.json();
    })
    .then(data => {
        const placeholder = document.querySelector(".tech"); // Select the container
        if (!placeholder) {
            console.error('Placeholder with class "tech" not found.');
            return;
        }

        let output = ""; // Initialize output

        // Loop through the array of objects
        for (let item of data) {
            output += `
                <div class="technology">
                    <img src="${item.image}" alt="${item.name}">
                    <p class="title"><b>${item.name}</b></p>
                    <p class="description">${item.description}</p>
                    <p class="price"><span>${item.price}</span></p>
                    <p class="cart">Add To Cart <i class="bx bx-cart-alt"></i></p>
                </div>
            `;
        }

        // Inject generated HTML into the DOM
        placeholder.innerHTML = output;
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
