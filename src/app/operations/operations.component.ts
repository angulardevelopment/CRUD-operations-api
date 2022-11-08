import { Component, OnInit } from '@angular/core';
import { ApiService, User } from '../api.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  users: User[] = [];
  enable = false;
  enableEditmode = false;
  userData: User = {} as User;
  title = '';
  body = '';
  addNewUser = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.viewList();
  }

  showEdit(user: User) {
    console.log(user);
    this.enable = true;
    this.enableEditmode = true;
    this.addNewUser = false;
    this.userData = user;
    this.title = this.userData.title;
    this.body = this.userData.body;

  }

  showAdd() {
    this.enable = true; this.addNewUser = true; this.enableEditmode = false
  }
  add() {
    const data = {

      title: this.title,

      body: this.body,

      "userId": this.users.length + 1

    }
    this.api.postRequest('posts', data).subscribe(res => {
      console.log(res);
      this.users.push(res);
      this.title = '';
      this.body = '';
      alert('added');
    }, error => {
      console.log(error)
    });
  }

  viewList() {
    this.api.getRequest('posts').subscribe(res => {
      this.users = res;
      console.log(res);
    }, error => {
      console.log(error)
    });
  }

  update() {
    console.log(this.userData);

    const data = {

      title: this.title,
      id: this.userData.id,
      body: this.body,

      "userId": this.userData.userId

    }
    this.api.putRequest(`posts/${this.userData.id}`, data).subscribe(res => {
      console.log(res);
      const jkbk = this.users.find((data) => (data.id === res.id));
      if (jkbk != undefined) {
        this.users[res.id - 1] = res;
      }
      console.log(this.users, jkbk);
      alert('updated');
      this.title = '';
      this.body = '';
    }, error => {
      console.log(error)
    });
  }

  deleteUser(user: User, i: number) {
    this.api.deleteRequest(`posts/${user.id}`).subscribe(res => {
      this.users = this.users.filter((u) => u.id != user.id);
      alert('deleted');

      console.log(res, this.users);

    }, error => {
      console.log(error)
    });
  }


}

