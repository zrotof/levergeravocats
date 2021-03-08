import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormationComponent } from './publication-formation.component';

describe('PublicationFormationComponent', () => {
  let component: PublicationFormationComponent;
  let fixture: ComponentFixture<PublicationFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
