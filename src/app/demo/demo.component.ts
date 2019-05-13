import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public onClickSubmit(formData): void{
    var name = formData.value.fname + " " + formData.value.lname;
    var email = formData.value.email;
    alert("Name: " + name + "\n Email: " + email);
  }

}
