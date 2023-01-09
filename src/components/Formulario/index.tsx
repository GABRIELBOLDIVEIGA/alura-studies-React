import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(event: React.FormEvent) {
        event.preventDefault();
        setTarefas((tarefasAntigas) => [...tarefasAntigas, { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() }]);

        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa"> Adicione um novo estudo</label>
                <input autoComplete="off" type="text" name="tarefa" value={tarefa} onChange={(evento) => setTarefa(evento.target.value)} id="tarefa" placeholder="O que você quer estudar" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" value={tempo} onChange={(evento) => setTempo(evento.target.value)} id="tempo" min="00:00:00" max="01:30:00" required />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    );
}

export class Formulario1 extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
    state = {
        tarefa: "",
        tempo: "00:00",
    };

    adicionarTarefa(event: React.FormEvent) {
        event.preventDefault();
        this.props.setTarefas((tarefasAntigas) => [...tarefasAntigas, { ...this.state, selecionado: false, completado: false, id: uuidv4() }]);
        this.setState({
            tarefa: "",
            tempo: "00:00",
        });
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa"> Adicione um novo estudo</label>
                    <input autoComplete="off" type="text" name="tarefa" value={this.state.tarefa} onChange={(evento) => this.setState({ ...this.state, tarefa: evento.target.value })} id="tarefa" placeholder="O que você quer estudar" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" step="1" name="tempo" value={this.state.tempo} onChange={(evento) => this.setState({ ...this.state, tempo: evento.target.value })} id="tempo" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        );
    }
}
