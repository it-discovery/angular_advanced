import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {

  status: string | undefined;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.status = 'Started: ' + event.url;
      } else if (event instanceof NavigationEnd) {
        this.status = 'Ended: ' + event.url;
      }
    })
  }
}
