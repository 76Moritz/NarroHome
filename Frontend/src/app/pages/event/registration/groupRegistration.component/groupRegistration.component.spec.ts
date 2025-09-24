import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRegistrationComponent } from './groupRegistration.component';

describe('EventComponent', () => {
  let component: GroupRegistrationComponent;
  let fixture: ComponentFixture<GroupRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
