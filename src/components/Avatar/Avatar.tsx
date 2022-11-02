import { Image } from "./styles";

export interface AvatarProps {
  size: "normal" | "small";
  source: string;
  alt: string;
}

export function Avatar({size, source, alt}: AvatarProps){
  return(
    <Image className={`avatar--${size}`} src={source} alt={alt} />
  )
}