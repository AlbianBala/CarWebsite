import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarWebsite';
  public goToCar() : void{
    window.scrollTo(0, 950);
  }  
  public goToAbout() : void{
    window.scrollTo(0, 2470);
  }
  public goToContact() : void{
    window.scrollTo(0, 3600);
  }
}
