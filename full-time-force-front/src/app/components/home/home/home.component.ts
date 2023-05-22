import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';
import { Commit } from 'src/app/util/models/git.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  commits: Commit[] = [];

  constructor(private gitService: GitService) { }

  ngOnInit(): void {
    this.loadCommits();
  }

  loadCommits() {
    this.gitService.getCommits().subscribe(
      (response: any) => {
        this.commits = response;
      },
      (error) => {
      }
    );
  }

}
