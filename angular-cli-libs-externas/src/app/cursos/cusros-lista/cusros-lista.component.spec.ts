import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusrosListaComponent } from './cusros-lista.component';

describe('CusrosListaComponent', () => {
  let component: CusrosListaComponent;
  let fixture: ComponentFixture<CusrosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusrosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusrosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
