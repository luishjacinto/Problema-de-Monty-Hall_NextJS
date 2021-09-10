import PortaModel from "../model/porta";

export function criarPortas(qtd: number, numeroPortaPremiada: number): PortaModel[]{
    return Array.from({ length: qtd }, (_, i) => {
        const numero = i + 1
        const premiada = numero === numeroPortaPremiada
        return new PortaModel(numero, premiada)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModificada.numero
        if(igualModificada)
            return portaModificada
        else
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
    })
}