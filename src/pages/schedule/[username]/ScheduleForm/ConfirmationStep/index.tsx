import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
function handleConfirmScheduling() {
  console.log('oi')
}

export function ConfirmStep() {
  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome Completo</Text>
        <TextInput placeholder="Seu Nome" />
      </label>

      <label>
        <Text size="sm">Email</Text>
        <TextInput type="email" placeholder="Seu Email" />
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant={'tertiary'}>
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
