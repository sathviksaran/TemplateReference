import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DemoComponent, CustomerListComponent]
})
export class AppComponent {
  title = 'TemplateReference';
}
