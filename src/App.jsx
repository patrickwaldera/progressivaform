import { Box } from "./components/Box"
import { Form } from "./components/Form"
import { Container } from "./styles"
import { Footer } from "./components/Footer"
import { useState } from "react";
import { FirstStepForm } from "./components/FirstStepForm";
import { SecondStepForm } from "./components/SecondStepForm";

const App = () => {
  const [ step, setStep ] = useState(0)
  const [ formData, setFormData ] = useState(null)

  const title = [
    "Dados para Cotação",
    "Dados do Veículo"
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    alert(`Obrigado ${formData.name}`)
  }

  return (
    <Container>
      <main>
        <Box>
          <Form onSubmit={handleSubmit} title={title[step]}>
            {step === 0 && <FirstStepForm setStep={setStep} formData={formData} setFormData={setFormData} />}
            {step === 1 && <SecondStepForm step={step} setStep={setStep} formData={formData} setFormData={setFormData}/>}
          </Form>
        </Box>
      </main>
      <Footer />
    </Container>
  )
}

export default App
