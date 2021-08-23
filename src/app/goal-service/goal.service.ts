import { Injectable } from '@angular/core';
import { Goals} from '../goal/goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }
  constructor() { }
}
