import Header from "../_components/header";
import { authOptions } from "../_lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import BookingItem from "../_components/bookin-item";
import { getConfirmedBooking } from "../_data/get-confirmed-booking";
import { getConcludedBookings } from "../_data/get-concluded-bookings";


const Booking = async () => {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
        return notFound()
    }

    const confirmedBookings = await getConfirmedBooking()
    const concludedBookings = await getConcludedBookings()

    return (
        <>
            <Header />
            <div className="p-5 space-y-3">
                <h1 className="text-xl font-bold">Meus Agendamentos</h1>
                {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
                    <p className="text-sm text-gray-400">Você ainda não tem agendamentos.</p>
                )}
                {confirmedBookings.length > 0 && (
                    <>
                        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                            Confirmados
                        </h2>
                        {confirmedBookings.map((booking) => (
                            <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))} />
                        ))}
                    </>
                )}
                {concludedBookings.length > 0 && (
                    <>
                        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                            Finalizados
                        </h2>
                        {concludedBookings.map((booking) => (
                            <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))} />
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default Booking