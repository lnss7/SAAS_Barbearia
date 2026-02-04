import { Input } from "@/app/_components/ui/input"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"

const Home = () => {
  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold"> Olá, Lucas!</h2>
        <p>Quarta-feira, 4 de Fevereiro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça a sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores FWS Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
