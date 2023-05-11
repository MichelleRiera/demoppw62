import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactosComponent } from './list-contactos.component';

describe('ListContactosComponent', () => {
  let component: ListContactosComponent;
  let fixture: ComponentFixture<ListContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListContactosComponent]
    });
    fixture = TestBed.createComponent(ListContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
