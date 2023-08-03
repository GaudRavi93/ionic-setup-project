import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { User } from './interfaces/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.getAllUsers()
    .subscribe((users: User[]) => {
      console.log(users);
    })
  }

}
