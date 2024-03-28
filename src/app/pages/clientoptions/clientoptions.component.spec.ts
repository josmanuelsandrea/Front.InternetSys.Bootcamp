import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientoptionsComponent } from './clientoptions.component';

describe('ClientoptionsComponent', () => {
  let component: ClientoptionsComponent;
  let fixture: ComponentFixture<ClientoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientoptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
