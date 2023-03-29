import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPrComponent } from './mapa-pr.component';

describe('MapaPrComponent', () => {
  let component: MapaPrComponent;
  let fixture: ComponentFixture<MapaPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaPrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
