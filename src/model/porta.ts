export default class PortaModel {
    #numero: number
    #premiada: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, premiada = false, selecionada = false, aberta = false){
        this.#numero = numero
        this.#premiada = premiada
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero(){ return this.#numero }
    get premiada(){ return this.#premiada }
    get selecionada(){ return this.#selecionada }
    get aberta(){ return this.#aberta }

    desselecionar(){
        return new PortaModel(this.numero, this.premiada, false, this.aberta)
    }

    selecionar(){
        return new PortaModel(this.numero, this.premiada, true, this.aberta)
    }

    alternarSelecao(){
        if(this.selecionada)
            return this.desselecionar()
        else
            return this.selecionar()
    }

    abrir(){
        return new PortaModel(this.numero, this.premiada, this.selecionada, true)
    }

    fechar(){
        return new PortaModel(this.numero, this.premiada, this.selecionada, false)
    }
}