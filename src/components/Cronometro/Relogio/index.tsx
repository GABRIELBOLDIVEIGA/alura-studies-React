import style from "./Relogio.module.scss";
import { EmSegundos } from "../../../enums/tempoEmSegundos"

interface Props {
    tempo: number | undefined;
}

export default function Relogio({tempo = 0}: Props) {

    const minutos = Math.floor(tempo / EmSegundos.minutosEmSegundos);
    const segundos = tempo % EmSegundos.minutosEmSegundos;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>

            <span className={style.relogioDivisao}>:</span>

            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    );
}
