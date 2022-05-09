import { RegistroconductorComponent } from './registroconductor.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('RegistroconductorComponent', () => {
  let component: RegistroconductorComponent;
  let fixture: ComponentFixture<RegistroconductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroconductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroconductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
