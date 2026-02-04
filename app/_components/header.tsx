import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Button } from "@/app/_components/ui/button"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
