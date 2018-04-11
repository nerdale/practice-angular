import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  userForm: FormGroup;

  // va a darme una instancia de un objeto, vamos a exigir que cada vez que se cree un register form component se cree un formbuilder
  //private significa que solo esa instancia puede ver el formbuilder
  // Constructor es lo primero que se ejecuta cuando creo un componente
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  
  createForm() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      age: [0, Validators.min(18)],
      mail: ["", Validators.required]
    });
    this.userForm.statusChanges.subscribe((value:any) => {
      console.log("Validation Change: " + JSON.stringify(value));
    });
    this.userForm.valueChanges.subscribe((value:any) => {
      console.log("Data Change: " + JSON.stringify(value));
    });
  }
}
