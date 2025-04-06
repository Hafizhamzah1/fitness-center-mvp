import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/members').subscribe((data: any) => {
      this.members = data;
    });
  }

  deleteMember(id: number) {
    this.http.delete(`/api/members/${id}`).subscribe(() => {
      this.members = this.members.filter(member => member.id !== id);
    });
  }
}