import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from "@angular/cdk/drag-drop"
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @ViewChild('taskField') taskField: ElementRef;
  @ViewChild('toDoColumn') toDoColumn: ElementRef;
  @ViewChild('inProgressColumn') inProgressColumn: ElementRef;
  @ViewChild('doneColumn') doneColumn: ElementRef;

  task: string;
  todo = [];

  in_progress = [];

  done = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addTask(){
    var task = this.taskField.nativeElement.value;

    if(task!==null){
      this.todo.push(task);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
