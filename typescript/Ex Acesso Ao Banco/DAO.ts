import DaoInterface from "./DaoInterface";

export default class DAO<T> implements DaoInterface{
    nomeTabela: string = ''

    insert(object: T): boolean{
        console.log('lógica de insert');
        if (true){
            return true
        }else {
            return false
        }
    }
    atualizar(object: T): boolean{
        console.log('lógica de update');
        if (true){
            return true
        }else {
            return false
        }
    }
    remover(id: number ): T{ //geralmente é retornado o objeto removido
        console.log('lógica de delete');

        if (true){
            return Object()
        }else {
            // return false
        }

    } 
    selecionar(id: number): T{
        console.log('lógica de select');
        if (true){
            return Object()
        }else {
           // return false
        }
    }
    selecionarTodos(): T[]{ //ou [any] ou Array<any>
        console.log('lógica de getAll');
        
         return [Object() ,Object()]
       
    }
}