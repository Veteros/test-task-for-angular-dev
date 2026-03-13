import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockConfig } from './block.model';

@Component({
  selector: 'lib-block-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="block-card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 5px;">
      <select [value]="config().selectedKey" (change)="onKeyChange($event)">
        <option value="" disabled>Select a property</option>
        @for (key of availableKeys(); track key) {
          <option [value]="key">{{ key }}</option>
        }
      </select>

      <div class="value-display" style="margin: 10px 0; font-size: 1.2em;">
        <strong>Value:</strong> {{ flatData()[config().selectedKey] ?? 'N/A' }}
      </div>

      <button (click)="delete.emit(config().id)">Remove Block</button>
    </div>
  `
})
export class BlockItemComponent {

  config = input.required<BlockConfig>();
  flatData = input.required<Record<string, any>>();
  availableKeys = input.required<string[]>();

  keyChange = output<{ id: string, newKey: string }>();
  delete = output<string>();

  onKeyChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.keyChange.emit({ id: this.config().id, newKey: selectElement.value });
  }
}