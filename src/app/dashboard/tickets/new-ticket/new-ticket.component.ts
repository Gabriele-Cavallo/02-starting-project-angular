import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('oninit');
    console.log(this.form()?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form()?.nativeElement);
  }

  onSubmit(titleElement: string, ticketText: string) {
    const enteredTitle = titleElement;
    const enteredText = ticketText;
    this.form()?.nativeElement.reset();
  }
}
