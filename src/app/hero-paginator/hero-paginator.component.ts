import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-paginator',
  templateUrl: './hero-paginator.component.html',
  styleUrls: ['./hero-paginator.component.scss']
})
export class HeroPaginatorComponent implements OnInit {

  @Output() eventPrev: EventEmitter<void> = new EventEmitter();
  @Output() eventNext: EventEmitter<void> = new EventEmitter();
  @Output() eventLimit: EventEmitter<number> = new EventEmitter();

  @Input() p: number;
  @Input() limit: number;
  public limitValues: number[] = [20, 30, 40, 50];
  public total: number = Math.floor(1562 / 20);
  ngOnInit(): void {

  }
  public nextPage() {

    this.eventNext.emit();
  }
  public prevPage() {
    this.eventPrev.emit();
  }
  public newLimit(limit: number) {
    this.total = Math.floor(1562 / limit);
    this.eventLimit.emit(limit);

  }
}
