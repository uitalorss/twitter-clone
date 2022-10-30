import { MainTitle } from "./styles";

export interface TitleProps {
  children: React.ReactNode;
  color: 'white' | 'black';
  size: 'sm' | 'normal'
}
export function Title({children, color, size}: TitleProps){

  return (
    <MainTitle
      className={[`title--color--${color}`, `title--size--${size}`].join(' ')}
    >
      {children}
    </MainTitle>
  )
}

Title.defaultProps = {
  color: 'black',
  size: 'normal'
}