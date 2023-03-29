import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaSpComponent } from './mapa-sp.component';

describe('MapaSpComponent', () => {
  let component: MapaSpComponent;
  let fixture: ComponentFixture<MapaSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaSpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
