const getShoes= async() => {
    const url ="https://portiaportia.github.io/json/shoes.json";
    
    try{
        const response = await fetch(url);
        return response.json();
    }catch(error){
        console.log(error);
    }
};
const showShoes=async () => {
    const shoes = await getShoes();
    
    shoes.foreach((shoes) => {
        document.getElementById("shoes-section").append(getShoeSection(shoe));
    });
};

const getShoeSection = (shoe) => {
    const section = document.createElement("section");


    const h3 = document.getElementById("h3")
        h3.innerHTML = shoe.name;
        section.append(h3);

        const brandP = document.getElementById("p");
        brandP.innerHTML = shoe.brand;
        section.append(brandP);

        const ul = document.getElementById("ul");
        section.append(ul);

        //loop thru reviews
        shoe.reviews.forEach((review) =>{
            const li = document.getElementById("li");
            li.innerHTML = review;
            ul.append(li);
        });


    return section;
}

showShoes();