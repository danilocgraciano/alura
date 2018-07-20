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
<<<<<<< HEAD
      alt: "compels3",
=======
      alt: "compels2",
>>>>>>> 8b6c75e963797733c2c74c3de1aae83eea91ece4
      src: "http://www.compels.net/wp-content/uploads/2018/07/LOGO-DEITADA-PARA-SITE.png"
    }
  ];
}
