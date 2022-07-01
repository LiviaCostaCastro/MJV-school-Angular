import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcollaboratorsComponent } from './listcollaborators.component';

describe('ListcollaboratorsComponent', () => {
  let component: ListcollaboratorsComponent;
  let fixture: ComponentFixture<ListcollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcollaboratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
