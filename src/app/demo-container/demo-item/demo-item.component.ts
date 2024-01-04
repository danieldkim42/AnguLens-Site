import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-item',
  templateUrl: './demo-item.component.html',
  styleUrls: ['./demo-item.component.scss']
})
export class DemoItemComponent {
  demoItems = [

    {
      title: 'Opening Extension',
      gifContent: 'gifLink' ,
      instructionsList: []
    },
    {
      title: 'Folder-File View',
      gifContent: 'gifLink' ,
      instructionsList: []
    },
    {
      title: 'Component View',
      gifContent: 'gifLink' ,
      instructionsList: []
    },
    {
      title: 'Services View',
      gifContent: 'gifLink' ,
      instructionsList: []
    }
    

  ]

}
