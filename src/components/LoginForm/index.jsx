import { useState } from 'react';
import Input from '../Input'

const LoginForm = () => {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })

  const handleChangeField = ({ target: { name, value } }) => setFields({ ...fields, [name]: value })

  const submitForm = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3004/users?email=${fields.email}&password=${fields.password}`, {
        method: 'GET',
      })
      const data = await response.json()
      if (data.length) {
        // Add JWT token code
      }
    } catch(e){
      throw e;
    }
  }

  return (
    <>
      <h1 className="text-center">Inscription</h1>
      <form onSubmit={submitForm}>
        <Input label="Email" id="email" name="email" value={fields.email} handleChange={handleChangeField}  />
        <Input label="Mot de passe" id="password" type="password" name="password" value={fields.password} handleChange={handleChangeField}  />
      </form>
    </>
  )
}

export default LoginForm;