import { useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core'
import * as Yup from 'yup'

import { Form, Input } from './components/Form'

export function UserForm() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().required('E-mail obrigatório')
  })
  const location = useLocation()
  const { dataSeleted }: any = location?.state
  console.log(dataSeleted)

  const onSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <div>
      <h3>Formulário de cadastro</h3>
      <Form onSubmit={onSubmit} data={dataSeleted} schema={schema}>
        <Input name="name" label="Nome completo" placeholder="Nome completo" />
        <Input name="email" label="E-mail" placeholder="Informe seu e-mail" />
        <Button type="submit" variant="contained" color="secondary">
          Salvar
        </Button>
      </Form>
    </div>
  )
}
