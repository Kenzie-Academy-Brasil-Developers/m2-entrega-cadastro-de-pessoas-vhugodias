import {Pessoa} from "../model/Pessoa.js"
import {db} from "./../db/db.js"

class PessoaController {
    static cadastrarPessoa(pessoa){
        const novaPessoa = new Pessoa (pessoa)
        db.pessoas.push(novaPessoa)
        console.log(db.pessoas)

        return db.pessoas
    }    
}

export {PessoaController}