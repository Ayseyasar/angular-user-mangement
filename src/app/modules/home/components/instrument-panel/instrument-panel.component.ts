import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-instrument-panel',
  templateUrl: './instrument-panel.component.html',
  styleUrls: ['./instrument-panel.component.css']
})
export class InstrumentPanelComponent implements OnInit {

  userData !: any;
  gmailUser !: any;
  hotmailUser !: any;
  yahooUser !: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getUser()
      .subscribe(res => {
        this.userData = res;
      });
    
    // this.gmailUser = this.userData.subscribe((res: any) => {
    //   res.forEach((element: { Email: any }) => {
    //     element.Email.includes('gmail');
    //   });
    // });

  }

}
