import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchList } from "./_constants/search"
import BookingItem from "./_components/bookin-item"
import Search from "./_components/search"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  const confirmedBookings = session?.user ? await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        gte: new Date()
      }
    },
    include: {
      service: {
        include: {
          barbershop: true
        }
      }
    },
    orderBy: {
      date: "asc"
    }
  }) : []

  const getDisplayName = () => {
    if (!session?.user?.name) return "Bem Vindo";
    const names = session.user.name.split(" ");
    if (names.length === 1) return names[0];
    return `${names[0]} ${names[names.length - 1]}`;
  };

  return (
    <div>
      {/*Header*/}
      <Header />

      {/*Texto*/}
      <div className="p-5">
        <h2 className="text-xl font-bold"> Olá, {getDisplayName()}!</h2>
        <p className="text-sm text-gray-400 capitalize">
          {format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR })}
        </p>

        {/*Barra de Busca*/}
        <div className="mt-6">
          <Search />
        </div>

        {/*Busca Rápida*/}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchList.map((item) => (
            <Button
              key={item.title}
              className="gap-2"
              variant="secondary"
              asChild
            >
              <Link href={`/barbershops?service=${item.title}`}>
                <Image
                  src={item.imageUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
                {item.title}
              </Link>
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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          {confirmedBookings.length > 0 ? "Agendamentos" : "Nenhum agendamento confirmado"}
        </h2>
        <div className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
          {confirmedBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>

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
    </div>
  )
}

export default Home
