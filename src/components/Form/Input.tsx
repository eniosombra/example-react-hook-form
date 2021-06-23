import { InputHTMLAttributes } from 'react'
// import { TextField } from '@material-ui/core'
import {
  Input as InputChakra,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder: string
  register?: any
  errors?: any
}

export function Input({
  name,
  label,
  placeholder,
  register,
  errors,
  ...rest
}: InputProps) {
  return (
    //#region input (nativo do HTML)
    // <>
    //   <input name={name} {...register(name)} {...rest} />
    // </>
    //#endregion

    //#region input (Chakra-UI)
    <>
      <FormControl isInvalid={!!errors?.[name]} mb={4}>
        <FormLabel htmlFor={name} mb={1}>
          {label}
        </FormLabel>
        <InputChakra
          id={name}
          variant="outline"
          name={name}
          mt={0}
          size="lg"
          {...register(name)}
          {...rest}
        />
        <FormErrorMessage mt={0}>{errors?.[name]?.message}</FormErrorMessage>
      </FormControl>
    </>
    //#endregion

    //#region TextField (Material-UI)
    // <>
    //   <TextField
    //     label={label}
    //     placeholder={placeholder}
    //     variant="outlined"
    //     fullWidth
    //     name={name}
    //     {...register(name)}
    //     error={!!errors?.[name]}
    //     helperText={!!errors?.[name] && errors?.[name].message}
    //     {...rest}
    //   />
    // </>
    //#endregion
  )
}
