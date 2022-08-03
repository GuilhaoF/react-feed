import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?:Boolean;
}

//obs o elemento imagem recebe varios atributos com isso usamos interfaces extendidas 
// importar interfaces de atributos HTML tipo <ImgHTMLAttributes>
export function Avatar({ hasBorder = true, ...props }:AvatarProps) {
    return (
        <img
         {...props}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}

        />
    )
}