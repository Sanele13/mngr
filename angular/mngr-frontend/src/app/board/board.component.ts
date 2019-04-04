import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from "@angular/cdk/drag-drop"
import {HttpService} from "../services/http.service";
import {MatDialog} from "@angular/material";
import {TaskPopupComponent} from "../components/task-popup/task-popup.component";

export interface DialogData {
  animal: string;
  name: string;
}

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
  name = '';
  animal = '';
  task: string;
  todo = [];

  in_progress = [];

  done = [];

  constructor(
    private httpService: HttpService,
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskPopupComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.changeTaskStatus(event.container, event.currentIndex);
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

  changeTaskStatus(container,index){
    let container_id = container.element.nativeElement.id;

    switch (container_id){
      case 'cdk-drop-list-0':
        this.todo[index].status = 'todo';
        this.httpService.post('/task/update',this.todo[index]).subscribe(result => {
          console.log(result)
        });
        break;
      case 'cdk-drop-list-1':
        this.in_progress[index].status = 'in_progress';
        this.httpService.post('/task/update',this.in_progress[index]).subscribe(result => {
          console.log(result)
        });
        break;
      case 'cdk-drop-list-2':
        this.done[index].status = 'done';
        this.httpService.post('/task/update',this.done[index]).subscribe(result => {
          console.log(result)
        });
        break;
    }
  }
  ngOnInit() {
    this.tasks.forEach((element) => {
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
