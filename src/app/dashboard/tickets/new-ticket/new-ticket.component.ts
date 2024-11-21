import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
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
  // @Output() add = new EventEmitter<{title: string; text: string}>();
  enteredTitle = '';
  enteredText = '';
  add = output<{title: string; text: string}>();

  ngOnInit() {
    console.log('oninit');
    console.log(this.form()?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form()?.nativeElement);
  }

  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    // this.form()?.nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
