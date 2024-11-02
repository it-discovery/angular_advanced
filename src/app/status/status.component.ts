import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {NotificationService} from "../core/notification.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {

  status = signal('');

  notificationService = inject(NotificationService);

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.status.set('Started: ' + event.url);
      } else if (event instanceof NavigationEnd) {
        this.notificationService.showMessage('Ended: ' + event.url, 'Book shop');
      }
    })
  }
}
