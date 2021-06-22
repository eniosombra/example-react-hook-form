import { useState } from 'react'
import { useHistory } from 'react-router-dom'

interface IData {
  name: string
  email: string
}

const initialData: IData[] = [
  {
    name: 'clienteX',
    email: 'clienteX@teste.com'
  },
  {
    name: 'clienteY',
    email: 'clienteY@teste.com'
  }
]

export function UserList() {
  const [data, setData] = useState<IData[]>(initialData)
  const history = useHistory()

  const handleEdit = (editData: any) => {
    console.log('editando...', editData)

    history.push('/form', {
      dataSeleted: editData
    })
  }

  return (
    <>
      <h3>Listagem de usuários</h3>

      {data.map((d: any) => (
        <ul key={d.name}>
          <li>
            {d.name} <button onClick={() => handleEdit(d)}>Editar</button>
          </li>
        </ul>
      ))}
    </>
  )
}
