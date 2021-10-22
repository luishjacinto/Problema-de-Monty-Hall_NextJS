import { useState } from "react"

import Cartao from "../components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from 'next/link'
import EntradaNumerica from "../components/EntradaNumerica"

export default function Formulario() {
    const [qtdPortas, setQtdPortas] = useState(3)
    const [numeroPortaPremiada, setNumeroPortaPremiada] = useState(1)

    return (
        <div className={styles.formulario}>
            <div>
                <Cartao bgcolor="#dd770a">
                    <h1>Monty Hall Luis</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica
                        value={qtdPortas}
                        onChange={value => setQtdPortas(value)}
                        text="Quantidade de portas" />
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica
                        value={numeroPortaPremiada}
                        onChange={value => setNumeroPortaPremiada(value)}
                        text="Porta com presente?" />
                </Cartao>
                <Cartao bgcolor="#16a038">
                    <Link href={`/jogo/${qtdPortas}/${numeroPortaPremiada}`} passHref>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
        </div>
    )
}
