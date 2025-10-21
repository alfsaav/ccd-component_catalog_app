import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewShellPage } from './new-shell.page';

describe('NewShellPageComponent', () => {
  let component: NewShellPage;
  let fixture: ComponentFixture<NewShellPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NewShellPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NewShellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
