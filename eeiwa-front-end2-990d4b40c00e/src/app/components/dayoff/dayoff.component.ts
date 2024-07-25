import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import {MatYearView} from '@angular/material/datepicker';

@Component({
  selector: 'app-dayoff',
  templateUrl: './dayoff.component.html',
  styleUrls: ['./dayoff.component.css']
})
export class DayoffComponent implements OnInit {
  private static readonly URL = '/api/universities';

  displayedColumns: string[] = ['position', 'date', 'actions'];
  daysOff: DayOff[] = [];
  date = new Date();
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  delete(id: number) {
    this.api.delete('/api/calendars' + '/' + id).subscribe(
      () => this.daysOff = this.daysOff.filter(item => item.id !== id)
    );
  }
  submit() {
    console.log(4);
    this.api.post('/api/calendars', {
      userId: 1,
       date: this.date
    }).subscribe(a => console.log(a));
    console.log(4);
  }


  openDialog(dayOff?: DayOff) {
    // const dialogRef = this.dialog.open(UniversityModalComponent, {
    //   width: '250px',
    //   data: university || {}
    // });
    //
    // dialogRef.afterClosed().subscribe((data: University) => {
    //   if (data && data.id) {
    //     this.api.post(UniversityListComponent.URL, data).subscribe(
    //       (result: University) => this.universities = this.universities.map(u => u.id === result.id ? result : u)
    //     );
    //   } else if (data) {
    //     this.api.post(UniversityListComponent.URL, data).subscribe(
    //       (result: University) => this.universities = [...this.universities, result]
    //     );
    //   }
    // });
  }

  private load() {
    this.api.get('/api/calendars').subscribe((data: DayOff[]) => this.daysOff = data);
  }
}



