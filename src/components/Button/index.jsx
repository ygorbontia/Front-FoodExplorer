import { ButtonSC } from './style';

export function Button({ type, title, ...rest }) {
  return (
    <ButtonSC type={ type } { ...rest }>
      { title }
    </ButtonSC>
  )
}