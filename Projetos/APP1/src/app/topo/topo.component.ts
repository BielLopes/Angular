import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    //selector: '[app-topo]' um seletor na forma de atrributo -> <div app-top></div>
    //selector: '.app-topo' um seletor na forma de Classe -> <div class="app-top"></div>
    templateUrl: './topo.component.html',
    /*template: "<p>Esse é o Component Topo</p>"   -> Definindo um Template inline
      template: `<p>Esse é o 
        Component Topo</p>`   -> Definindo um Template inline de múltiplas linhas
    */
    styleUrls: ['./topo.component.css']  //É possível associar vários arquivos CSS ao mesmo componente
    /*styles: [`.exemplo {
        color:red
    }`] -> Estilos inline de multiplas linhas
    */
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês'
}