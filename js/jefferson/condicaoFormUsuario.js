const btnSalvar = document.getElementById('liveAlertBtn');
const inputNome = document.getElementById('nome');

// btnSalvar.addEventListener('click', () => {
btnSalvar.addEventListener('click', () => {
    // .trim() remove espaços em branco acidentais
    if (inputNome.value.trim() === "") {
        // Se estiver vazio, chama o alerta de erro
        appendAlert('Por favor, preencha o campo Nome!', 'danger');
    } else {
        // Se estiver preenchido, redireciona ou salva
        appendAlert('Sucesso! Redirecionando...', 'success');
        
        setTimeout(() => {
            window.location.href = 'sua-pagina.html';
        }, 2000);
    }
});