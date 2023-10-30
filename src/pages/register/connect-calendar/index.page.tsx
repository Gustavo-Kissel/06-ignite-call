import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
// import { api } from "../../../lib/axios"
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const hasSignIn = session.status === 'authenticated'

  async function handleSignIn() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {hasSignIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button variant="secondary" size="sm" onClick={handleSignIn}>
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões da acesso ao Google Calendar.
          </AuthError>
        )}

        <Button
          type="submit"
          disabled={!hasSignIn}
          onClick={handleNavigateToNextStep}
        >
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
