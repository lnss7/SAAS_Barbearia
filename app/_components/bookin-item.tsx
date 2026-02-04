import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

//TODO receber agendamento como props
const BookingItem = () => {
  return (
    <>
      {/*Agendamentos*/}
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>

      <Card>
        <CardContent className="flex justify-between p-0">
          {/*ESQUERDA*/}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit"> Confirmado </Badge>
            <h3 className="font-semibold">Corte de cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <p className="text-sm">Barbearia FWS </p>
            </div>
          </div>

          {/*DIREITA*/}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Fevereiro</p>
            <p className="text-2xl">04</p>
            <p className="text-sm">09:30</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
