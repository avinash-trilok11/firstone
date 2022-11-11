import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css'],
})
export class RestComponent implements OnInit {
  users: Users[] = [];
  FullName: any;
  p: number = 1;
  constructor(private rs: RestService) {}

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  getUsers() {
    console.log('getUsers function is working');
    return this.rs.getUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.users = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  Search() {
    if (this.FullName == '') {
      this.ngOnInit();
    } else {
      this.users = this.users.filter((res) => {
        return res.FullName.toLocaleLowerCase().match(
          this.FullName.toLocaleLowerCase()
        );
      });
    }
  }
  key = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
