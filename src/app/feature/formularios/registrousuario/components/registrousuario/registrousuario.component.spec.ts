import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrouUsuariosComponent } from './registrousuario.component';


describe('RegistrousuarioComponent', () => {
  let component: RegistrouUsuariosComponent;
  let fixture: ComponentFixture<RegistrouUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrouUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrouUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
