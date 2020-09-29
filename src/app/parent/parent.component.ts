import { Component, OnInit } from '@angular/core';
import{ Team } from '../team';
import { TeamService } from '../team.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  selectedTeam:Team;   //what does this means
  teams:Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit()  {
    this.getTeams();
  }
  onSelect(team:Team):void{
    this.selectedTeam = team;

  }
  getTeams(): void {
    this.teams = this.teamService.getTeams();
    }

}
