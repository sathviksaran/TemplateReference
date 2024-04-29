import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
    sayHello(inputEl: HTMLInputElement){
      //alert('Hello '+inputEl.value);
      console.log(inputEl)
    }
}
