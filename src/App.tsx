import React from 'react'
import { useForm } from 'react-hook-form'

import './App.css'

enum StatusEnum {
  active = 'active',
  inactive = 'inactive'
}

type FormValues = {
  name: string
  email: string
  group: string
  status: StatusEnum
  creditLimit: number
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
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
        <input {...register('name', { required: true })} />
        {errors.name && <span>Campo preenchimento obrigatório</span>}

        <input {...register('email', { required: true })} />
        {errors.email && <span>Campo preenchimento obrigatório</span>}

        <input {...register('group', { required: true, maxLength: 8 })} />
        {errors.group && (
          <span>
            Campo preenchimento obrigatório e com no máximo 8 caracteres
          </span>
        )}

        <select {...register('status')}>
          <option value="active">Ativo</option>
          <option value="inactive">Inativo</option>
        </select>

        <input
          type="number"
          {...register('creditLimit', { required: true, valueAsNumber: true })}
          placeholder="limite de crédito"
        />
        {errors.creditLimit && <span>Campo preenchimento obrigatório</span>}

        <button type="submit" style={{ height: 40 }}>
          Cadastrar
        </button>
      </form>

      <p>{data}</p>
    </div>
  )
}

export default App
