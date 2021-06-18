import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'

export function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <h3>Formulário de cadastro de produtos</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            {...register('description', { required: true })}
            variant="outlined"
            label="Descrição"
            placeholder="Descrição"
          />
          {errors.description && <Typography>Campo obrigatório</Typography>}
          <Button type="submit" variant="contained" color="secondary">
            Enviar
          </Button>
        </Box>
      </form>
    </div>
  )
}
