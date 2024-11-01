import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {

  status = signal('');

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.status.set('Started: ' + event.url);
      } else if (event instanceof NavigationEnd) {
        this.status.set('Ended: ' + event.url);
      }
    })
  }
}
