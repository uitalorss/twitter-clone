import {ButtonContent} from './styles'

export interface ButtonProps {
  children: React.ReactNode;
  size: 'normal' | 'large';
  disabled: boolean;
  color: 'primary' | 'option' | 'transparent';
}
export function Button({
    children, 
    size, 
    disabled,
    color,
    ...props}: ButtonProps)
  {
  const btnDisabled = disabled ? 'disabled' : ''
  return(
    <ButtonContent
      className={['button', `button--${size}`, `button--color--${color}`, btnDisabled].join(' ')}
    >
      {children}
    </ButtonContent>
  )
}

Button.defaultProps = {
  size: 'normal',
  disabled: false,
  color: 'primary'
}