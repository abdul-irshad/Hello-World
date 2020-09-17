import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIConsumeComponent } from './apiconsume.component';

describe('APIConsumeComponent', () => {
  let component: APIConsumeComponent;
  let fixture: ComponentFixture<APIConsumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIConsumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
