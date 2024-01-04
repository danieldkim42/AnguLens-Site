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
      description: "Starting Source Directory",
      gifContent: 'gifLink' ,
      instructionsList: ["Install AnguLens from extension marketplace", "Open commands (cmd/ctrl + shift + p) and run \"Start AnguLens\"", "Right click on \"src\" folder in Angular project", "Click \"Copy Path\"", "Paste path into text input and click generate"]
    },
    {
      title: 'Folder-File View',
      description: "Displays file structure of selected directory",
      gifContent: 'gifLink' ,
      instructionsList: ["Click on folders to open or close them for a cleaner view", "Double click files to navigate current VSCode window to clicked file"]
    },
    {
      title: 'Component View',
      description: "Displays component hierarchy, including routers, with overlayed connections representing different connections",
      gifContent: 'gifLink' ,
      instructionsList: ["Filter component connections using dropdown menu", "Click on components to get additional information in modal -Inputs -Outputs -Services"]
    },
    {
      title: 'Services View',
      description: "Displays every service as a new network, with any components that utilize that service",
      gifContent: 'gifLink' ,
      instructionsList: ["Displays every service as a new network, with any components that utilize that service"]
    }
    

  ]

}
