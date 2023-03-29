import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaScComponent } from './mapa-sc.component';

describe('MapaScComponent', () => {
  let component: MapaScComponent;
  let fixture: ComponentFixture<MapaScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
