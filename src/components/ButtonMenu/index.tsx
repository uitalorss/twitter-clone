import { MenuItem } from "./styles"

interface ButtonMenu {
  image: string,
  label: string
}
export function ButtonMenu({image, label}: ButtonMenu){
  return (
    <MenuItem>
      <img src={image} alt="" />
      <span>{label}</span>
    </MenuItem>
  )
}