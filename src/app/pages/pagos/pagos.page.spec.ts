import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosPage } from './pagos.page';

describe('PagosPage', () => {
  let component: PagosPage;
  let fixture: ComponentFixture<PagosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
