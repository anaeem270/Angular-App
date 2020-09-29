import { Injectable } from '@angular/core';
import { Team } from './team';
@Injectable()
export class TeamService {

  constructor() { }


  teams = [new Team(346, "Leicester City", "Foxes",
  "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png"),new Team(394, "Crystal Palace","Crystal",
  "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png")];

  getTeams():Team[] {
    return this.teams;
    }


}
