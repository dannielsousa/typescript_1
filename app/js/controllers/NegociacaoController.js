class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView'); //Seletor do elemento do html onde sera inserida a view da tabela
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.updade(this._negociacoes); //para chamar a tabela assim que é carregada.
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), //no construtor de date, esta pegando tudo que tem hifen e trocando por virgula
        parseInt(this._inputQuantidade.value), //date aceita string no construtor dela, por isso fazer esse esquema
        parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.updade(this._negociacoes);
    }
}
