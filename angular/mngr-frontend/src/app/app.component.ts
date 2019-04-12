import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mngr-frontend';
  isLoginForm = true;
  isRegisterForm = false;
  loggedIn = true;

  @ViewChild('loginForm') loginForm: ElementRef;
  @ViewChild('registrationForm') regForm: ElementRef;
  userTasks = {};


  constructor(
    private httpService: HttpService
  ){}

  login(e) {
    e.preventDefault();
    let form = this.loginForm.nativeElement;
    let user_data = {
      email:form.username.value,
      password:form.password.value
    }
    this.httpService.post('/login',user_data).subscribe( result => {
      if(result['message']=='success'){
        this.isLoginForm = false;
        this.loggedIn = true;
        this.userTasks = result['tasks'];
      }
    });
  }

  register(e) {
    e.preventDefault();

    let form = this.regForm.nativeElement;
    let user_data = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      password: form.user_pwd.value,
      confirm_password: form.conf_pwd.value
    };

    this.httpService.post('/register',user_data).subscribe( result => {
      console.log(result);
    });
  }
}
