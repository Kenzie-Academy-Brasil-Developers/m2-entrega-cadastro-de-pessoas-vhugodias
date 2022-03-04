import { PessoaController } from "./controller/pessoas.js";
import { Cadastro } from "./model/Cadastro.js"; 


const botaoCadastro = document.querySelector('body')
botaoCadastro.addEventListener("submit", Cadastro.capturaDados)

const botaoPesquisa = document.querySelector('#btn')
botaoPesquisa.addEventListener("click", Cadastro.filtraCargo)