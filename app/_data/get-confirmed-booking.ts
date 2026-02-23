"use server"

import { authOptions } from "../_lib/auth"
import { getServerSession } from "next-auth"
import { db } from "../_lib/prisma"

export const getConfirmedBooking = async () => {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
        return []
    }

      return db.booking.findMany({
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
}