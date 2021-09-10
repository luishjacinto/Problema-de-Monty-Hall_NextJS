import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";

export default function Jogo() {
    const router = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    router?.query.qtdPortas
    router?.query.numeroPortaPremiada


    useEffect(() => {
        const qtdPortas = +router?.query.qtdPortas
        const numeroPortaPremiada = +router?.query.numeroPortaPremiada

        const qtdPortasValida = qtdPortas >= 3 && qtdPortas <= 100
        const numeroPortaPremiadaValido = numeroPortaPremiada >= 1 && numeroPortaPremiada <= qtdPortas
        const ehValido = qtdPortasValida && numeroPortaPremiadaValido

        setValido(ehValido)
    }, [portas, router?.query.qtdPortas, router?.query.numeroPortaPremiada])

    useEffect(() => {
        setPortas(
            criarPortas(
                +router?.query.qtdPortas,
                +router?.query.numeroPortaPremiada
            )
        )
    }, [router?.query])

    function renderizarPortas(){
        return valido && portas.map((porta, i) => <Porta key={i} value={porta}
            onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>)
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            {!valido && 'Parâmetros para criação do jogo estão inválidos'}
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button>Reiniciar</button>
                </Link>
            </div>
        </div>
    )
}
