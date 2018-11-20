export default interface DaoInterface{ //O <T> Refere-se a um Type que será recebido 
    nomeTabela: string

    insert(object: any): boolean;
    atualizar(object: any): boolean
    remover(id: number): any //geralmente é retornado o objeto removido
    selecionar(id: number): any
    selecionarTodos(): any[] //ou [any] ou Array<any>
}