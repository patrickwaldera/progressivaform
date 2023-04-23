import { Input } from "../Input"
import { User, Mail, Phone } from 'lucide-react';
import { Button } from "../Button"
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { validateEmail } from "../../utils/validateEmail"
import { ufList } from "../../utils/config"

const FirstStepForm = ({ setStep, setFormData }) => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ phoneNumber, setPhoneNumber ] = useState("")
  const [ stateID, setStateID ] = useState(null)
  const [ formIsValid, setFormIsValid ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState(null)
 
  useEffect(() => {
    if(name !== "" && email !== "" && phoneNumber !== "" && stateID !== null) {
      setFormIsValid(true)
      return
    }
    setFormIsValid(false)
  }, [name, email, phoneNumber, stateID])

  const handleClick = () => {
    if(validateEmail(email)) {
      setFormData({name, email, phoneNumber, stateID})
      setStep(1)
    }
    else {
      setErrorMessage("E-mail inválido!")
    }
  }

  return (
    <>
      <Input 
        id={"AssociatedName"}
        title={"Nome"}
        icon={< User />}
        placeholder={"Seu nome"}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input 
        id={"AssociatedEmail"}
        title={"E-mail"}
        icon={< Mail />}
        placeholder={"Seu e-mail"}
        errorMessage={errorMessage}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => validateEmail(email) ? setErrorMessage(null) : setErrorMessage("E-mail inválido!")}
      />
      <Input 
        id={"AssociatedPhoneNumber"}
        type={"phone"}
        title={"Telefone"}
        icon={< Phone />}
        placeholder={"Seu telefone"}
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <Input 
        id={"StateId"}
        type={"select"}
        title={"UF (Unidade Federativa)"}
        placeholder={"Selecione a UF"}
        options={ufList}
        value={stateID}
        onChange={(state) => setStateID(state)}
      />
      <div className="btn-wrapper">
        <Button text={"Continuar"} disabled={!formIsValid} onClick={() => handleClick()} />
      </div>
    </>
  )
}

FirstStepForm.propTypes = {
  setStep: PropTypes.func,
  setFormData: PropTypes.func
}

export { FirstStepForm }
