import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTestComponent } from './the-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TheTestComponent', () => {
  let component: TheTestComponent;
  let fixture: ComponentFixture<TheTestComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheTestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create h1 element on UI', () => {
    const h1Element = de.query(By.css('#heading'));
    expect(h1Element.nativeElement.textContent).toBe('Hello World');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it("should mocj test data for testservice:getdata function", () => {
  //   spyOn(TestService, "getData").and.returnValue([{ id: "u001", label: "Hello" }])

  //   const service = new TestService();
  //   const result = service.getData()
  //   expect(result).toEqual([{ id: "u001", label: "Hello" }])
  // })
});
