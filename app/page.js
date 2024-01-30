import Link from "next/link"

export default function Home() {
  // console.log('Server Component');
  return (
   <div> 
    <h1 className="text-5xl mb-8 font-bold">Next .js Tutorial</h1>
    <Link href='/clients' className="btn btn-accent">Get Started</Link>
   </div>
  )
}
