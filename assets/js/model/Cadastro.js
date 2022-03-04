import {PessoaController} from "./../controller/pessoas.js"
import {db} from "../db/db.js"

const alunos = document.querySelector('#lista-de-alunos')
const cargo = document.querySelector('#cargoOption') 

class Cadastro {
    static capturaDados (event){
        event.preventDefault()
        const inputs = event.target
        const dataForm = {}

        for (let i = 0; i < inputs.length; i++){
            const {name, value} = inputs [i]
            if (name){
                dataForm[name] = value
            }
        }
        if (db.pessoas.some(pessoa => pessoa.email === dataForm.email)){
            return alert("Esse e-mail já está sendo usado!")
        } else {
            PessoaController.cadastrarPessoa(dataForm)
            Cadastro.listaCadastro(db.pessoas)
        }

    }

    static listaCadastro (lista){
        alunos.innerHTML=''
        for (let i = 0; i < lista.length; i++){
            const {nome, sobrenome, email, cargo} = lista[i]
            const li = document.createElement('li')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            const p3 = document.createElement('p')
            const p4 = document.createElement('p')

            p1.innerText = `${nome}`
            p2.innerText = `${sobrenome}`
            p3.innerText = `${email}`
            p4.innerText = `${cargo}`
            alunos.appendChild(li)
            li.appendChild(p1)
            li.appendChild(p2)
            li.appendChild(p3)
            li.appendChild(p4)

        }
    }

    static filtraCargo (){
        const valorCargo = cargo.value
        if (valorCargo === "Todos"){
            Cadastro.listaCadastro(db.pessoas)
        } else  {
            Cadastro.listaCadastro(db.pessoas.filter(({cargo}) =>{
                return cargo === valorCargo
            }))            
        }
    }
}

export {Cadastro}