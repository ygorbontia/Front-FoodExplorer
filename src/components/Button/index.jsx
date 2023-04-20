import { ButtonSC } from './style';

export function Button({ type, title }) {
  return (
    <ButtonSC type={ type }>
      { title }
    </ButtonSC>
  )
}