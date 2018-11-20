import DaoInterface from './DaoInterface'
import Pessoa from './Pessoa'

export default class PessaDAO implements DaoInterface{
    nomeTabela: string = 'tb_pessoa'

    insert(object: Pessoa): boolean{
        console.log('logiga de insert');
        if (true){
            return true
        }else {
            return false
        }
    }
    atualizar(object: Pessoa): boolean{
        console.log('logiga de update');
        if (true){
            return true
        }else {
            return false
        }
    }
    remover(id: number ): Pessoa{ //geralmente é retornado o objeto removido
        console.log('logiga de delete');

        if (true){
            return new Pessoa('','')
        }else {
            // return false
        }

    } 
    selecionar(id: number): Pessoa{
        console.log('logiga de select');
        if (true){
            return new Pessoa('','')
        }else {
           // return false
        }
    }
    selecionarTodos(): Pessoa[]{ //ou [any] ou Array<any>
        console.log('logiga de getAll');
        
         return [new Pessoa('','') ,new Pessoa('','')]
       
    }
}