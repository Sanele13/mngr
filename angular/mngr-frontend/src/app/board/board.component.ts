import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from "@angular/cdk/drag-drop"
import {HttpService} from "../services/http.service";
import {forEach} from "@angular/router/src/utils/collection";
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

  @Input() tasks;

  task: string;
  todo = [];

  in_progress = [];

  done = [];

  constructor(
    private httpService: HttpService
  ) { }

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
      let task_obj = {
        status:'todo',
        creator:{
          name:'Sanele Mpangalala',
          email:'mpnsan005@myuct.ac.za'
        },
        assignee: {
          name:'Kevin Durant',
          email:'kevin@gsw.com'
        },
        task:task,
        description: null,
        priority:1,
        created_at: new Date()

      };
      this.todo.push(task_obj);
      this.httpService.post('/task/create',task_obj).subscribe(result => {
        if(result['message']=='success'){
          console.log('task saved!');
        //  TODO create a popup with the message from backend
        }
      });
    }
  }

  ngOnInit() {
    this.tasks.forEach((element) => {
      console.log(element.status);
      switch (element.status){
        case 'todo':
          this.todo.push(element);
          break;

        case 'in_progress':
          this.in_progress.push(element);
          break;

        case 'done':
          this.done.push(element);
          break;

        default:
          break;
      }
    });
  }


}
