import Link from "next/link"
import Image from "next/image"

const DrinksList = ({drinks}) => {
  return (
    <div className="w-full">
    <ul className='grid grid-cols-2 xl:grid-cols-2 gap-6'>
        {drinks.map((drink)=> {
            return (<li key={drink.idDrink} className="text-xl font-medium">

                <Link href={`/drinks/${drink.idDrink}`} className='text-xl font-medium hover:bg-sky-700'>
                    
                    <div className="relative h-48 mb-4">
                      <Image src={drink.strDrinkThumb} fill sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw' 
                      alt={drink.strDrink} className="rounded-md object-cover"/>
                    </div>
                    {drink.strDrink}
                </Link>
            </li>
        );
        })}
      
    </ul>
    </div>
  )
}

export default DrinksList
