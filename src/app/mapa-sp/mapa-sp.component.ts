import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mapa-sp',
  templateUrl: './mapa-sp.component.html',
  styleUrls: ['./mapa-sp.component.css']
})
export class MapaSpComponent {

  latitude!: number;
  longitude!: number;
  searchControl!: FormControl;
  zoom!: number;
  @ViewChild("search")
  searchElementRef!: ElementRef;
  geoCoder!: google.maps.Geocoder;

  center = { lat: -23.533773, lng: -46.625290 };
  // Crie uma caixa delimitadora com lados a aproximadamente 80 km de distância do ponto central
  defaultBounds = {
  north: this.center.lat + 0.8,
  south: this.center.lat - 0.8,
  east: this.center.lng + 0.8,
  west: this.center.lng - 0.8,
};

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    //definindo os padrões do mapa
    this.zoom = 15;
    this.latitude = -23.533773;
    this.longitude = -46.625290;

    //criando um campo de pesquisa
    this.searchControl = new FormControl();

    //definindo a posição inicial
    this.setCurrentPosition();

    //carrega o Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
          console.log('geoCoder',this.geoCoder);

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        bounds: this.defaultBounds,
        // types: ['address'],
        componentRestrictions: {'country': 'BR'},
        strictBounds: true
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //definindo latitude, longitude e zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 13;
        });
      });
    });
  }
  mapClick(event: any){
    // this.latitude=event.coords.lat;
    // this.longitude=event.coords.lng;
    console.log(event);
  }
  markerDragEnd($event: { coords: { lat: number; lng: number; }; }){
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.geoCoder.geocode({'location': {lat: this.latitude, lng: this.longitude }}, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
this.searchControl.setValue(results[0].formatted_address);

          console.log('formatted_address',results[0].formatted_address);

        } else {
          window.alert('Nenhum resultado localizado');
        }
      } else {
        window.alert('Geocoder falhou devido a: ' + status);
      }

    });
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = -23.533773;
        this.longitude = -46.625290;
        this.zoom = 12;
      });
    }
  }

}
