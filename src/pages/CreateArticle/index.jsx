import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addArticle } from '../../store/articles'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea'
import Input from '../../components/Input'
import Banner from '../../components/Banner'
import Select from '../../components/Select'

const CreateArticle = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [countries, setCountries] = useState([])
  const [displayBanner, setDisplayBanner] = useState(false)
  const [fields, setFields] = useState({
    title: '',
    country: 'AF',
    description: '',
    price: '0.00',
  })
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const body = await response.json()
        
        const countriesSerialize = body.map(({ name, alpha2Code }) => ({ label: name, value: alpha2Code }))
        setCountries(countriesSerialize)

      } catch(e) {
        throw e;
      }
    }
    fetchCountries()    
  }, [])

  const handleChangeField = ({ target: { name, value } }) => {
    setFields({ 
      ...fields, 
      [name]: value
    })
  }

  const closeBanner = () => setDisplayBanner(false)

  const submitForm = (e) => {
    e.preventDefault();
    const checkRequired = Object.keys(fields).find(key => fields[key] === '')
    if (checkRequired || fields.price === '0.00') {
      return;
    }
    dispatch(addArticle({...fields, id: uuidv4()}))
    setDisplayBanner(true)
    setFields({
      title: '',
      country: 'AF',
      description: '',
      price: '0.00',
    })
  }

  return (
    <>
      <form onSubmit={submitForm} className="w-2/3 mx-auto">
      {displayBanner && <Banner text="Article ajoute !" close={closeBanner} />}
        <Input 
          label="Titre"
          id="title"
          name="title"
          className="mt-10"
          value={fields.title}
          handleChange={handleChangeField}
        />
        <Textarea 
          label="Description"
          id="description"
          name="description"
          value={fields.description}
          handleChange={handleChangeField}
        />      
        <Input 
          label="Prix"
          id="price"
          name="price"
          step="0.01"
          type="number"
          value={fields.price}
          handleChange={handleChangeField}
        />
        <Select
          label="Pays"
          options={countries}
          name="country"
          id="country"
          value={fields.country}
          handleChange={handleChangeField}
        />
        <Button type="submit" text="Ajouter article" />
        <Button text="Articles" handleClick={() => history.push('/articles')} />
      </form>
    </>
  )
}

export default CreateArticle;
