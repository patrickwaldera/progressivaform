import { Input } from "../Input"
import { Button } from "../Button"
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

const SecondStepForm = ({ step, setStep, setFormData }) => {
  const [ plate, setPlate ] = useState("")
  const [ formIsValid, setFormIsValid ] = useState(false)

 
  useEffect(() => {
    if(plate !== "") {
      setFormIsValid(true)
      return
    }
    setFormIsValid(false)
  }, [plate])

  return (
    <>
      <Input 
        id={"VehiclePlate"}
        title={"Nome"}
        placeholder={"Placa do veículo"}
        value={plate}
        onChange={(event) => setPlate(event.target.value)}
      />
      <div className="btn-wrapper">
        <Button text={"Voltar"} onClick={() => setStep(step-1)} style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}} />
        <Button type="submit" text={"Enviar"} disabled={!formIsValid} onClick={() => null} />
      </div>
    </>
  )
}

SecondStepForm.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  setFormData: PropTypes.func
}

export { SecondStepForm }
