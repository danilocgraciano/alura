import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      alt: "notebook",
      src: "http://www.compels.net/wp-content/uploads/2016/05/notebook.jpg"
    },
    {
      alt: "compels",
      src: "http://www.compels.net/wp-content/uploads/2018/07/LOGO-DEITADA-PARA-SITE.png"
    },
    {
      alt: "compels",
      src: "http://www.compels.net/wp-content/uploads/2018/07/LOGO-DEITADA-PARA-SITE.png"
    }
  ];
}
