import DaoInterface from './DaoInterface'
import Concessionaria from './Concessionaria'

export default class ConcessionariaDAO implements DaoInterface{
    nomeTabela: string = 'tb_concessionaria'

    insert(object: Concessionaria): boolean{
        console.log('logiga de insert');
        if (true){
            return true
        }else {
            return false
        }
    }
    atualizar(object: Concessionaria): boolean{
        console.log('logiga de update');
        if (true){
            return true
        }else {
            return false
        }
    }
    remover(id: number ): Concessionaria{ //geralmente é retornado o objeto removido
        console.log('logiga de delete');

        if (true){
            return new Concessionaria("",[])
        }else {
            // return false
        }

    } 
    selecionar(id: number): Concessionaria{
        console.log('logiga de select');
        if (true){
            return new Concessionaria('',[])
        }else {
           // return false
        }
    }
    selecionarTodos(): Concessionaria[]{ //ou [any] ou Array<any>
        console.log('logiga de getAll');
        
         return [new Concessionaria('',[]) ,new Concessionaria('',[])]
       
    }
}