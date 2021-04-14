import { useState } from 'react';
import Input from '../Input'

const RegisterForm = () => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChangeField = ({ target: { name, value } }) => setFields({ ...fields, [name]: value })

  const submitForm = async e => {
    e.preventDefault();

    try {
      await fetch('http://localhost:3004/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fields)
      })
    } catch(e){
      throw e;
    }
  }

  return (
    <>
      <h1 className="text-center">Inscription</h1>
      <form onSubmit={submitForm}>
        <Input label="Prénom" id="firstName" name="firstName" value={fields.firstName} handleChange={handleChangeField} />
        <Input label="Nom" id="lastName" name="lastName" value={fields.lastName} handleChange={handleChangeField}  />
        <Input label="Email" id="email" name="email" value={fields.email} handleChange={handleChangeField}  />
        <Input label="Mot de passe" id="password" type="password" name="password" value={fields.password} handleChange={handleChangeField}  />
      </form>
    </>
  )
}

export default RegisterForm;