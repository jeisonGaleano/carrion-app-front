import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarViajesComponent } from './listar-viajes.component';

describe('ListarViajesComponent', () => {
  let component: ListarViajesComponent;
  let fixture: ComponentFixture<ListarViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarViajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
