import {ButtonContent} from './styles'

export interface ButtonProps {
  children: React.ReactNode;
  size: 'normal' | 'large' | 'small';
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
      disabled={disabled}
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