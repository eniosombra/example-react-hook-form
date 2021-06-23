import { useLocation } from 'react-router-dom'
import * as Yup from 'yup'
import { Flex, Box, Button, Heading } from '@chakra-ui/react'

import { Form, Input } from './components/Form'

export function UserForm() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().required('E-mail obrigatório')
  })
  const location = useLocation()
  const { dataSeleted }: any = location?.state

  const onSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <>
      <Heading>Formulário de cadastro</Heading>

      <Form onSubmit={onSubmit} data={dataSeleted} schema={schema}>
        <Input name="name" label="Nome" placeholder="Nome" />
        <Input name="email" label="E-mail" placeholder="Informe seu e-mail" />

        <Button type="submit" colorScheme="blue">
          Salvar
        </Button>
      </Form>
    </>
  )
}
