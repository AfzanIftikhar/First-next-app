import Cards from "@/components/Cards";
import Image from "next/image";

export default function Home() {
  return (

   <div>
  
    <div className="flex flex-wrap gap-4">

    <Cards title="Card Title 1" description="This is a description for the card." />
    <Cards title="Card Title 2" description="This is a description for the card." />
    <Cards title="Card Title 3" description="This is a description for the card." />
    <Cards title="Card Title 4" description="This is a description for the card." />
    <Cards title="Card Title 5" description="This is a description for the card." />
    <Cards title="Card Title 6" description="This is a description for the card." />
    </div>
   </div>
  );
}
