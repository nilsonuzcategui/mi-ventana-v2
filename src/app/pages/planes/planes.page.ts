import { Component, OnInit } from '@angular/core';
import { FetcherService } from 'src/app/core/services/fetcher.service';

@Component({
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.css'],
})
export class PlanesPage implements OnInit {
  clientePlanes: any;

  constructor(private fetcher: FetcherService) {}

  ngOnInit(): void {
    this.fetcher.get('/page-service').subscribe((data: any) => {
      this.clientePlanes = data.body;
    });
  }
}
