import { Container } from './styles'

interface IButtonProps {
  title: string
}

export const Button = ({ title }: IButtonProps) => {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  )
}
