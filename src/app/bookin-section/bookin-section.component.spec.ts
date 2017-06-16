import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinSectionComponent } from './bookin-section.component';
import { MyDatePickerModule } from 'mydatepicker';

describe('BookinSectionComponent', () => {
  let component: BookinSectionComponent;
  let fixture: ComponentFixture<BookinSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinSectionComponent, MyDatePickerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
