import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * This is a card with some docs
 *
 * It supports [markdown](https://en.wikipedia.org/wiki/Markdown), so you can embed formatted text,
 * like **bold**, _italic_, and `inline code`.
 *
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('title') title = 'titlez';
  @Input('subtitle') subtitle = 'subtitlez';
  @Input('content') content = '😄';

  @Output() btnClicked = new EventEmitter<boolean>();

  constructor() {}

  /**
   * Happens when button is clicked
   */
  handleBtnClick() {
    this.btnClicked.emit(true);
  }
}
