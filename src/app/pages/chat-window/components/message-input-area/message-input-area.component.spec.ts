import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputAreaComponent } from './message-input-area.component';

describe('MessageInputAreaComponent', () => {
  let component: MessageInputAreaComponent;
  let fixture: ComponentFixture<MessageInputAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageInputAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
