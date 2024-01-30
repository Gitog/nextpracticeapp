import Link from "next/link"
import Image from "next/image"
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id)=> {
  const res =  await fetch(`${url}${id}`);
  if (!res.ok){
    throw new Error("Failed to fetch the Drink...")
  }
  return res.json()
}

const SingleDrinkPage = async ({params}) => {
  const data = await getSingleDrink(params.id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb
  // console.log(data)
  return (
    <div className="card w-96 bg-base-400 shadow-xl">
       <figure className="px-10 pt-10">
        <Image src={imgSrc} width={300} height={400} className="w-48 h-48" priority alt={title}></Image>
        </figure>
        <div className="card-body items-center text-center">
      <h1 className="text-4xl mt-8">{title}</h1>
      <div className="card-actions">
      <Link href='/drinks' className="btn btn-success mt-6"> All Drinks</Link>
      </div>
      </div>
    </div>
  )
}

export default SingleDrinkPage;
