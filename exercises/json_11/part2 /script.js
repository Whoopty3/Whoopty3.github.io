const getBreweryCo=async() => {
    try{
        const response = (await fetch("https://api.openbrewerydb.org/breweries")).json();
    }catch(error){
        console.log(error);
    }
};
const showBreweryName=async () => {
    const BreweryCo= await getBreweryCo();
    console.log(breweries);

    breweries.forEach((brewery) => {
        const section = document.createElement("section");
        breweries.append(section);

        //create the heading
        const a = document.createElement("a");
        a.href=brewery.website_url;
        section.append(a);
        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        //brewery type
        const p = document.createElement("p")
        p.innerHTML = brewery.brewerytype + "brewery";
        section.append(p);
    });

};
