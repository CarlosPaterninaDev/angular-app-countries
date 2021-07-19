import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
})
export class InputSearchComponent implements OnInit {
  @Input() placeholder = '';
  query = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe((query) => this.onDebounce.emit(query));
  }

  onSearch(): void {
    this.onEnter.emit(this.query);
  }

  keyPress() {
    this.debouncer.next(this.query);
  }
}
