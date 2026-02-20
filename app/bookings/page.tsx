import Header from "../_components/header";
import { authOptions } from "../_lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { db } from "../_lib/prisma";
import BookingItem from "../_components/bookin-item";


const Booking = async () => {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
        return notFound()
    }

    const confirmedBookings = await db.booking.findMany({
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
    })

    const concludedBookings = await db.booking.findMany({
        where: {
            userId: (session.user as any).id,
            date: {
                lt: new Date()
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
    })

    return (
        <>
            <Header />
            <div className="p-5 space-y-3">
                <h1 className="text-xl font-bold">Meus Agendamentos</h1>
                <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                    Confirmados
                </h2>
                {confirmedBookings.length > 0 ? confirmedBookings.map(booking => <BookingItem key={booking.id} booking={booking} />) : <p className="text-left text-gray-400 text-sm">Nenhum agendamento confirmado</p>}
            </div>
            <div className="p-5 space-y-3">
                <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                    Finalizados
                </h2>
                {concludedBookings.length > 0 ? concludedBookings.map(booking => <BookingItem key={booking.id} booking={booking} />) : <p className="text-left text-gray-400 text-sm">Nenhum agendamento finalizado</p>}
            </div>
        </>
    )
}

export default Booking