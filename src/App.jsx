import { Box } from "./components/Box"
import { Form } from "./components/Form"
import { Container } from "./styles"
import { Footer } from "./components/Footer"
import { useState } from "react";
import { FirstStepForm } from "./components/FirstStepForm";
import { SecondStepForm } from "./components/SecondStepForm";
import { useTransition, animated } from 'react-spring';

const App = () => {
  const [ step, setStep ] = useState(0)
  const [ formData, setFormData ] = useState(null)
  
  const transitions = useTransition(step, {
    key: step,
    from: { opacity: 0 },
    enter: { opacity: 1},
    leave: { opacity: 0, display: "none" },
  });

  const title = [
    "Dados para Cotação",
    "Dados do Veículo"
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    setTimeout(() => {
      setStep(0)
      setFormData(null)
    }, 3000)
  }

  return (
    <Container>
      <main>
        <Box>
          <Form onSubmit={handleSubmit} title={title[step]}>
            {transitions((style, item) => 
              item === 0 ?
              <animated.div className="animation-wrapper" style={style}><FirstStepForm setStep={setStep} formData={formData} setFormData={setFormData} /></animated.div>
              :
              <animated.div className="animation-wrapper" style={style}><SecondStepForm step={step} setStep={setStep} formData={formData} setFormData={setFormData}/></animated.div>
            )}
          </Form>
        </Box>
      </main>
      <Footer />
    </Container>
  )
}

export default App
