import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { MarkerType } from "igniteui-angular-charts";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit  {

  @ViewChild("map", {static: true})
    public map !: IgxGeographicMapComponent;
    @ViewChild("template", {static: true})
    public tooltip !: TemplateRef<object>;
    constructor(private api: ApiService) {
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder

        var a = this.api.getLocation().subscribe((res)=> {
          this.onDataLoaded(res);
        });
        // console.log(this.api.getLocation());
        // fetch("https://static.infragistics.com/xplatform/data/WorldCities.json")
        //     .then((response) => response.json())
        //     .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(jsonData: any[]) {
        // console.log("loaded https://www.infragistics.com/angular-demos-lob/assets/Data/WorldCities.json " + jsonData.length);

        const geoLocations: any[] = [];
        // parsing JSON data and using only cities that are capitals
        for (const jsonItem of jsonData) {
            const location = {
                city: jsonItem.name,
                country: jsonItem.country,
                latitude: jsonItem.latitude,
                longitude: jsonItem.longitude,
                population: jsonItem.val
            };
            geoLocations.push(location);
        }

        // creating symbol series with loaded data
        const geoSeries = new IgxGeographicSymbolSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.markerType = MarkerType.Circle;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.markerBrush = "LightGray";
        geoSeries.markerOutline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
    }

  

}

