import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {TopbarComponent} from "./topbar/topbar.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {BoardComponent} from "./board/board.component";
import {HttpService} from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DragDropModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        TopbarComponent,
        BoardComponent
      ],
      providers:[
        HttpService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mngr-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mngr-frontend');
  });

});
