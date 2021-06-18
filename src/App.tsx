import React from 'react'
import { useForm } from 'react-hook-form'

import './App.css'

type FormValues = {
  name: string
  email: string
  group: string
  creditLimit: number
}

function App() {
  const { register, handleSubmit } = useForm<FormValues>()
  const [data, setData] = React.useState('')

  const onSubmit = (formData: FormValues) => {
    setData(JSON.stringify(formData))
    console.log(formData)
  }

  return (
    <div className="App-header">
      <h3>Cadastro de Cliente</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        style={{
          display: 'flex',
          height: '180px',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        <input {...register('name', { required: true, maxLength: 8 })} />

        <input {...register('email', { required: true })} />

        <input {...register('group', { required: true })} />

        <input
          type="number"
          {...register('creditLimit', { required: true, valueAsNumber: true })}
          placeholder="limite de crédito"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <p>{data}</p>
    </div>
  )
}

export default App
