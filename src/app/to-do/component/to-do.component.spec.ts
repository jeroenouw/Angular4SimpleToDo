import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo } from '../model/to-do.model';
import { ToDoComponent } from './to-do.component';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a new todo`, async(() => {
    let fixture = TestBed.createComponent(ToDoComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof ToDo).toBeTruthy()
  }));
});
