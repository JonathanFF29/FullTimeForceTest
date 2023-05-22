import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/util/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const user: User = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.authService.login(user).subscribe(
      (response: any) => {
        const token = response.token;
        sessionStorage.setItem('token', token);
        this.router.navigate(['/home']);
      },
      (error) => {
      }
    );
  }
}
