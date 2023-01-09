import { EmSegundos } from "../../enums/tempoEmSegundos"

export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

    const horasEmSegundos = Number(horas) * EmSegundos.horaEmSegundos;
    const minutosEmSegundos = Number(minutos) * EmSegundos.minutosEmSegundos;

    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}