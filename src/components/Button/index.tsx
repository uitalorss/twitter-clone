import {ButtonContent} from './styles'

interface buttonProps {
  name: string;
}
export function Button({name}: buttonProps){
  return(
    <ButtonContent>{name}</ButtonContent>
  )
}