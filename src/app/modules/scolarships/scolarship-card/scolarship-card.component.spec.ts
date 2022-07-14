import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScolarshipCardComponent } from './scolarship-card.component';

describe('ScolarshipCardComponent', () => {
  let component: ScolarshipCardComponent;
  let fixture: ComponentFixture<ScolarshipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScolarshipCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScolarshipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
