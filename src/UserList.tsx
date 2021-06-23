import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { Button } from '@chakra-ui/react'

import { Form, Input } from './components/Form'

type IData = {
  id: string
  name: string
  email: string
}

const initialData: IData[] = [
  {
    id: '1',
    name: 'clienteX',
    email: 'clienteX@teste.com'
  },
  {
    id: '2',
    name: 'clienteY',
    email: 'clienteY@teste.com'
  }
]

type FormMode = 'add' | 'edit' | 'list'

export function UserList() {
  const [data, setData] = useState<IData[]>(initialData)
  const [dataSeleted, setDataSeleted] = useState<IData>({} as IData)
  const [mode, setMode] = useState<FormMode>('list')
  const history = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().required('E-mail obrigatório')
  })

  const onSubmit = (formData: any) => {
    console.log(mode, formData)
    mode === 'add'
      ? setData([...data, { id: Math.random(), ...formData }])
      : setData(
          data.map((dataState) =>
            dataState.id === formData.id ? { ...formData } : dataState
          )
        )
    setMode('list')
  }

  const handleAdd = () => {
    // history.push('/form', {
    //   dataSeleted: {}
    // })
    // setFormStatus(true)
    setMode('add')
    setDataSeleted({} as IData)
  }

  const handleEdit = (editData: any) => {
    console.log('editando...', editData)

    setMode('edit')
    setDataSeleted(editData)

    // history.push('/form', {
    //   dataSeleted: editData
    // })
  }

  const handleCancel = () => setMode('list')

  return (
    <>
      <button onClick={handleAdd}>
        <strong>NOVO</strong>
      </button>

      {mode === 'list' &&
        data.map((d: any) => (
          <ul key={d.name}>
            <li>
              {d.name}
              {' --- '}
              <button onClick={() => handleEdit(d)}>
                <strong>Editar</strong>
              </button>
            </li>
          </ul>
        ))}

      {(mode === 'add' || mode === 'edit') && (
        <Form onSubmit={onSubmit} data={dataSeleted} schema={schema}>
          <Input name="name" label="Nome" placeholder="Nome" />
          <Input name="email" label="E-mail" placeholder="Informe seu e-mail" />

          <div>
            <Button type="submit" colorScheme="cyan">
              Salvar
            </Button>
            <Button colorScheme="cyan" variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>
          </div>
        </Form>
      )}
    </>
  )
}
