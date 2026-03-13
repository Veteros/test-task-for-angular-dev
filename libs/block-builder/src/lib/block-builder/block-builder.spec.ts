import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockBuilder } from './block-builder';

describe('BlockBuilder', () => {
  let component: BlockBuilder;
  let fixture: ComponentFixture<BlockBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockBuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
