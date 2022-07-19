import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedSigningComponent } from './embedded-signing.component';

describe('EmbeddedSigningComponent', () => {
  let component: EmbeddedSigningComponent;
  let fixture: ComponentFixture<EmbeddedSigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedSigningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddedSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
