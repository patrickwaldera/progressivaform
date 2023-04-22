import { Box } from "./components/Box"
import { Form } from "./components/Form"
import { Input } from "./components/Input"
import { Container } from "./styles"
import { User, Mail, Phone } from 'lucide-react';
import { Button } from "./components/Button"
import { Footer } from "./components/Footer"
import { useState } from "react";

const App = () => {
  const [ email, setEmail ] = useState('')

  const validateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const emailIsValid = validateEmail(email)
    if (!emailIsValid)
    {
      console.log("Email inválido")
    }
  }

  return (
    <Container>
      <main>
        <Box>
          <Form onSubmit={handleSubmit} title={"Dados para Cotação"}>
            <Input 
              id={"AssociatedName"}
              title={"Nome"}
              icon={< User />}
              placeholder={"Seu nome"}
            />
            <Input 
              id={"AssociatedEmail"}
              title={"E-mail"}
              icon={< Mail />}
              placeholder={"Seu e-mail"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input 
              id={"AssociatedPhoneNumber"}
              type={"email"}
              title={"Telefone"}
              icon={< Phone />}
              placeholder={"Seu telefone"}
            />
            <Input 
              id={"StateId"}
              type={"select"}
              title={"UF (Unidade Federativa)"}
              placeholder={"Selecione a UF"}
            />
            <div className="btn-wrapper">
              <Button type="submit" text={"Continuar"} />
            </div>
          </Form>
        </Box>
      </main>
      <Footer />
    </Container>
  )
}

export default App
