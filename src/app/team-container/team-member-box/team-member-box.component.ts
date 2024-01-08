import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-box',
  templateUrl: './team-member-box.component.html',
  styleUrls: ['./team-member-box.component.scss']
})
export class TeamMemberBoxComponent {
  @Input() member: any | undefined;
}
