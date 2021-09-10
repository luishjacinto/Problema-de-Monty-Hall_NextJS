import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta'
import Presente from './Presente'

interface PortaPops {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Portal(props: PortaPops) {
    const porta = props.value

    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''
    const fechada = porta.aberta === false
    const premiada = porta.premiada

    const alternarSelecao = _ => {
        if(!porta.aberta)
            props.onChange(porta.alternarSelecao())
    }

    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada} {}`}>
                {fechada ?
                    renderizarPorta()
                    : premiada ?
                        <Presente />
                        : false
                }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}