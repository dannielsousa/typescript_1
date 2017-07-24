class NegociacoesView {

    private _elemento: Element; //pode ser declarado como tipo generico do elemento

    constructor (seletor: string) {
    
       this._elemento = document.querySelector(seletor);
    
    }

    updade(model: Negociacoes): void {

        this._elemento.innerHTML = this.template(model); //pega o resultado do templete, atribuiu ao innerhtml e converte automaticamente o elemento do DOM
    }

    //define o que quer exibir para o usuário
    template(model: Negociacoes): string { 
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map( negociacao => {
                        return `
                            <tr> 
                                <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                }).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    }
}