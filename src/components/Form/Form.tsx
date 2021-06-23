import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface FormProps {
  onSubmit: (data: any) => void
  data: Record<never, never>
  children: JSX.Element | JSX.Element[]
  schema: Yup.ObjectSchema<any>
}

export const Form = ({ onSubmit, data, children, schema }: FormProps) => {
  const {
    // getValues,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: data,
    resolver: yupResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children?.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    // getValue: getValues,
                    errors,
                    key: child.props.name
                  }
                })
              : child
          })
        : children}
    </form>
  )
}
