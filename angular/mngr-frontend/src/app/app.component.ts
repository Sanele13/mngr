import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpService} from "./services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mngr-frontend';
  isLoginForm = true;
  isRegisterForm = false;

  @ViewChild('registrationForm') regForm: ElementRef;

  constructor(
    private httpService: HttpService
  ){}

  login(e) {
    e.preventDefault();
    this.httpService.post('/login',{email:'sanele@rodcode.co.za',password:'1234'}).subscribe( result => {
      console.log(result);
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
