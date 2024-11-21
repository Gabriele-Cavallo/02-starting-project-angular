import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // private interval?: NodeJS.Timeout;
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    console.log('on init');
    const interval = setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log('after view init')
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
