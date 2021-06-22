import {
  TextField,
  InputBaseProps,
  StandardTextFieldProps,
  BaseTextFieldProps,
  TextFieldProps
} from '@material-ui/core'
import { InputHTMLAttributes } from 'react'

// interface InputProps extends StandardTextFieldProps {
// interface InputProps extends TextFieldProps {
// interface InputProps extends BaseTextFieldProps {
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder: string
  register?: any
  getValue?: any
  errors?: any
}

// type InputProps = {
//   name: string
//   label: string
//   placeholder: string
//   register?: any
//   getValue?: any
//   errors?: any
// } & StandardTextFieldProps &
//   InputHTMLAttributes<HTMLInputElement>

export function Input({
  name,
  label,
  placeholder,
  register,
  getValue,
  errors,
  ...rest
}: InputProps) {
  return (
    // <TextField
    //   label={label}
    //   placeholder={placeholder}
    //   variant="outlined"
    //   fullWidth
    //   {...register(name)}
    //   error={!!errors?.[name]}
    //   helperText={!!errors?.[name] && errors?.[name].message}
    //   {...rest}
    // />
    <input name={name} {...register(name)} {...rest} />
  )
}
