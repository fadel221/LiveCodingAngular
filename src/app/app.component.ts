import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LiveCodingAngular';
  action=true;
  etat="Activer le champ";

  ChangeStateButton()
  {
   this.action=!this.action
    this.action == true ? this.etat="Activer le champ": this.etat ="Desactiver le champ"
  }

}
