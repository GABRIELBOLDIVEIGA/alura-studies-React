import React from "react";
import { IProps } from "../../types/botao";
import style from "./Botao.module.scss";

export default function Botao({ onClick, type, children }: IProps) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    );
}


