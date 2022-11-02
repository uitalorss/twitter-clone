import { Image } from "./styles";
import user from '../../../src/assets/imageUser.png';

export interface AvatarProps {
  size: "normal" | "small";
  source: string;
  alt?: string;
}

export function Avatar({size, source, alt}: AvatarProps){
  return(
    <Image className={`avatar--${size}`} src={source} alt={alt} />
  )
}

Avatar.defaultProps = {
  size: 'normal',
  source: user,
}