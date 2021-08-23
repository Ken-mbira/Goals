import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  title = "Goals"
  goals: Goal[];
  constructor(goalService: GoalService) {
    this.goals = goalService.getGoals();
  }
  
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  };
  completeGoal(isComplete, index){
    if(isComplete){
      this.goals.splice(index,1);
    }
  };

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal)
  }
  

  ngOnInit(): void {
  }

}
