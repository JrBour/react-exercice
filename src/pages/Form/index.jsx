import { useState } from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Radio from '../../components/Radio'
import Checkbox from '../../components/Checkbox'

const selectOptions = [
  {
    value: 'football',
    label: 'Football'
  },
  {
    value: 'tennis',
    label: 'Tennis'
  },
  {
    value: 'handball',
    label: 'Handball'
  }
]

const civilities = [
  {
    id: 'mister',
    value: 'mister',
    labelRadio: 'Monsieur'
  },
  {
    id: 'miss',
    value: 'miss',
    labelRadio: 'Mademoiselle'
  },
  {
    id: 'other',
    value: 'other',
    labelRadio: 'Autre'
  }
]

const Form = () => {
  const [fields, setFields] = useState({
    phoneNumber: '',
    text: '',
    email: '',
    age: '0',
    activity: 'football',
    civility: ''
  })

  const [licences, setLicences] = useState([
  {
    id: 'car',
    name: 'car',
    labelCheckbox: 'Voiture',
    isChecked: false,
  },
  {
    id: 'boat',
    name: 'boat',
    labelCheckbox: 'Bateau',
    isChecked: false,
  },
  {
    id: 'motorcycle',
    name: 'motorcycle',
    labelCheckbox: 'Moto',
    isChecked: false,
  }
])

  const handleChangeField = ({ target: { value, name } }) => setFields({
    ...fields,
    [name] : value
  })

  const handleChangeCheckbox = ({ target: { value } }) => {
    const newLicences = licences.map(licence => {
      if (licence.name === value) {
        return ({
          ...licence,
          isChecked: !licence.isChecked
        })
      }
      return licence;
    })
    setLicences(newLicences)
  }

  return (
    <form className="m-10">
      <Input 
        label="Texte"
        name="text"
        placeholder="e.g. Lorem ipsum"
        handleChange={handleChangeField}
        value={fields.text}
      />
      <Input
        label="Telephone"
        name="phone"
        type="phone"
        placeholder="e.g. 06.12.13.14.15"
        handleChange={handleChangeField}
        value={fields.phoneNumber}
      />
      <Input
        label="email"
        name="email"
        type="mail"
        placeholder="e.g. john@doe.com"
        handleChange={handleChangeField}
        value={fields.email}
      />
      <Input
        label="Age"
        name="age"
        type="number"
        handleChange={handleChangeField}
        value={fields.age}
      />
      <Select
        label="Activite"
        options={selectOptions}
        handleChange={handleChangeField}
        name="activity"
        id="activity"
        value={fields.activity}
      />
      <Radio 
        label="Civilite"
        name="civility"
        handleChange={handleChangeField}
        values={civilities}
      />
      <Checkbox 
        handleChange={handleChangeCheckbox}
        label="Permis"
        values={licences}
      />
      <button type="submit" className="py-3 px-5 border mt-10">Valider</button>
    </form>
  )
}

export default Form;