import { Component, input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockItemComponent } from './block-item.component';
import { BlockConfig } from './block.model';

@Component({
  selector: 'lib-block-builder',
  imports: [CommonModule, BlockItemComponent],
  templateUrl: './block-builder.html',
  styleUrl: './block-builder.css',
})
export class BlockBuilder {

  dataSource = input.required<Record<string, any>>();

  keys = computed(() => Object.keys(this.dataSource() || {}));

  blocks = signal<BlockConfig[]>([]);

  addBlock(): void {
    const defaultKey = this.keys().length > 0 ? this.keys()[0] : '';
    const newBlock: BlockConfig = {
      id: crypto.randomUUID(),
      selectedKey: defaultKey
    };
    this.blocks.update(current => [...current, newBlock]);
  }

  removeBlock(id: string): void {
    this.blocks.update(current => current.filter(b => b.id !== id));
  }

  updateBlockKey(id: string, newKey: string): void {
    this.blocks.update(current =>
      current.map(b => b.id === id ? { ...b, selectedKey: newKey } : b)
    );
  }

  moveBlock(index: number, direction: number): void {
    this.blocks.update(current => {
      const newArray = [...current];
      const targetIndex = index + direction;
      [newArray[index], newArray[targetIndex]] = [newArray[targetIndex], newArray[index]];
      return newArray;
    });
  }
}
