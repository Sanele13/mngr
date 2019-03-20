import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {By} from "@angular/platform-browser";

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragDropModule],
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create board component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a To Do column',() => {
    let fixture = TestBed.createComponent(BoardComponent);
    let board = fixture.debugElement.componentInstance;
    expect(board.todo).toBeDefined();
  });

  it('should have a In Progress column',() => {
    let fixture = TestBed.createComponent(BoardComponent);
    let board = fixture.debugElement.componentInstance;
    expect(board.in_progress).toBeDefined();
  });

  it('should have a Done column',() => {
    let fixture = TestBed.createComponent(BoardComponent);
    let board = fixture.debugElement.componentInstance;
    expect(board.done).toBeDefined();
  });
});
