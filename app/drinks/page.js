import DrinksList from "@/components/DrinksList";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    const data  = await response.json();
    //throw Error
    if(!response.ok){
        throw new Error('Failed to fetch data.')
    }
    return data;
}
const Drinks = async () => {
    const data = await fetchDrinks();
    // console.log(data);
    return (
        <div>
           <DrinksList drinks={data.drinks} />
        </div>
    );
};

export default Drinks