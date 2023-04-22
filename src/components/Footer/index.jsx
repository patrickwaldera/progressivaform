import { FooterContainer } from "./styles"
import { Phone, Mail } from "lucide-react"

const Footer = () => {
  const year = new Date()
  return (
    <FooterContainer>
      <strong> © {year.getFullYear()} Progressiva Assitência Mútua - Todos os Direitos Reservados</strong>
      <span>Av. Mal. Floriano Peixoto, 3024 - Parolin, Curitiba - PR, 80220-000</span>
      <span><Phone size={14} /> 0800-677-1020</span>
      <span><Phone size={14} /> (41) 2105-1020</span>
      <span><Mail size={14} /> contato@aprogressiva.com.br</span>
    </FooterContainer>
  )
}

export { Footer }
