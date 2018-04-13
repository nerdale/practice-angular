import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  userForm: FormGroup; //esto sea una propiedad de mi constructor, se ejecutará dentro del constructor, por lo que lo llamararemos en nuestra función createForm

  // va a darme una instancia de un objeto, vamos a exigir que cada vez que se cree un register form component se cree un formbuilder
  //private significa que solo esa instancia puede ver el formbuilder
  // Constructor es lo primero que se ejecuta cuando creo un componente
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {}

  
  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: [0, Validators.min(18)],
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userForm.statusChanges.subscribe((value:any) => {
      console.log("Validation Change: " + JSON.stringify(value));
    });
    this.userForm.valueChanges.subscribe((value:any) => {
      console.log("Data Change: " + JSON.stringify(value));
    });
  }
  onRegisterClick(){
    this.authService.signup(this.userForm.get("mail").value, this.userForm.get("password").value);
  }

  onClickLogout(){
    this.authService.logout(); //acá me deslogueo
  }
}
