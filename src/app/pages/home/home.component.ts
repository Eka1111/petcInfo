import { Component } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    AOS.init({ duration: 1000 });
  }
}
