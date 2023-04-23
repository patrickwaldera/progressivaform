import { Input } from "../Input"
import { Button } from "../Button"
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { InputSwitch } from "../InputSwitch";
import { brandList, modelList, yearList } from "../../utils/config"

const SecondStepForm = ({ step, setStep, formData, setFormData }) => {
  const [ isApp, setIsApp ] = useState(false)
  const [ plate, setPlate ] = useState("")
  const [ brand, setBrand ] = useState("")
  const [ year, setYear ] = useState("")
  const [ model, setModel ] = useState("")
  const [ formIsValid, setFormIsValid ] = useState(false)

  useEffect(() => {
    if(formData.isApp !== undefined) {
      setIsApp(formData.isApp)
      setPlate(formData.plate)
    }
  }, [formData])
 
  useEffect(() => {
    if(plate !== "" && brand !== "" && year !== "" && model !== "") {
      setFormIsValid(true)
      return
    }
    setFormIsValid(false)
  }, [isApp, plate, brand, year, model])

  const handleClick = () => {
    setFormData({...formData, isApp, plate, brand, year, model})
  }

  const handleBack = () => {
    handleClick()
    setStep(step-1)
  }

  return (
    <>
      <InputSwitch 
        id={"IsApp"}
        text={"Você é Motorista de Aplicativo?"}
        checked={isApp}
        onChange={() => setIsApp(!isApp)}
      />
      <Input 
        id={"VehiclePlate"}
        title={"Placa"}
        placeholder={"Placa do veículo"}
        value={plate}
        onChange={(event) => setPlate(event.target.value)}
      />
      <Input 
        id={"VehicleBrandId"}
        type={"select"}
        title={"Marca"}
        placeholder={"Selecione a Marca"}
        options={brandList}
        value={brand}
        onChange={(select) => setBrand(select)}
      />
      <Input 
        id={"VehicleYear"}
        type={"select"}
        title={"Ano Modelo"}
        placeholder={"Selecione o Ano"}
        options={yearList}
        value={year}
        onChange={(select) => setYear(select)}
        isDisabled={brand === "" ? true : false}
      />
      <Input 
        id={"VehicleModelId"}
        type={"select"}
        title={"Modelo"}
        placeholder={"Selecione o Modelo"}
        options={modelList}
        value={model}
        onChange={(select) => setModel(select)}
        isDisabled={year === "" ? true : false}
      />

      <div className="btn-wrapper">
        <Button text={"Voltar"} onClick={() => handleBack()} style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}} />
        <Button type="submit" text={"Enviar"} disabled={!formIsValid} onClick={() => handleClick()} />
      </div>
    </>
  )
}

SecondStepForm.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export { SecondStepForm }
