import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import DAO from './DAO';
//let dao: ConcessionariaDAO = new ConcessionariaDAO()
let concessionaria: Concessionaria = new Concessionaria('',[])
//dao.insert(concessionaria)

//let dao2: PessoaDAO = new PessoaDAO()
let pessoa: Pessoa = new Pessoa('','')


let dao3: DAO<Concessionaria> = new DAO<Concessionaria>()
dao3.insert(concessionaria)


let dao4: DAO<Pessoa> = new DAO<Pessoa>()
dao4.insert(pessoa)

dao4.remover(5)
//dao2.insert(pessoa)

//import ConcessionariaDAO from './ConcessionariaDAO'

//import PessoaDAO from './PessoaDAO'

