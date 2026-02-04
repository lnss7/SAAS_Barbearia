import { Input } from "@/app/_components/ui/input"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchList } from "./_constants/search"
import BookingItem from "./_components/bookin-item"
import { Card, CardContent } from "./_components/ui/card"

const Home = async () => {
  //chamando o banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/*Header*/}
      <Header />

      {/*Texto*/}
      <div className="p-5">
        <h2 className="text-xl font-bold"> Olá, Lucas!</h2>
        <p>Quarta-feira, 4 de Fevereiro.</p>

        {/*Barra de Busca*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça a sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/*Busca Rápida*/}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchList.map((item) => (
            <Button key={item.title} className="gap-2" variant="secondary">
              <Image
                src={item.imageUrl}
                width={16}
                height={16}
                alt={item.title}
              />
              {item.title}
            </Button>
          ))}
        </div>

        {/*Banner*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores FWS Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-contain"
          />
        </div>

        {/*Agendamentos*/}
        <BookingItem />

        {/*Recomendados*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      {/*Footer*/}
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2026 - Todos os direitos reservados{" "}
              <span className="font-bold">FWS Barber</span>{" "}
            </p>
            <p className="text-xs font-bold text-gray-400">
              Development by Lucas
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
