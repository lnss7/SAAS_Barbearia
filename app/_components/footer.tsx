import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6 text-center">
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
  )
}

export default Footer
