import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEvaluationCoordinadorComponent } from './self-evaluation-coordinador.component';

describe('SelfEvaluationCoordinadorComponent', () => {
  let component: SelfEvaluationCoordinadorComponent;
  let fixture: ComponentFixture<SelfEvaluationCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfEvaluationCoordinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEvaluationCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
