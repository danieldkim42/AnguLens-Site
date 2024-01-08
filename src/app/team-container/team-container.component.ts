import { Component } from '@angular/core';
import { Teaminfo } from './TeamInfo';

@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent {
  teamInfo = Teaminfo;
}
