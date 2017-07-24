const controller = new NegociacaoController();

document
    .querySelector('.form')
    .addEventListener('submit',controller.adiciona.bind(controller)); //para manter a associação do this do adiciona com a do controller
    