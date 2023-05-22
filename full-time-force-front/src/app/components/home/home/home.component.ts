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
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 0;

  constructor(private gitService: GitService) { }

  ngOnInit(): void {
    this.loadCommits();
  }

  loadCommits() {
    this.gitService.getCommits().subscribe(
      (response: any) => {
        this.commits = response;
        this.totalPages = Math.ceil(this.commits.length / this.itemsPerPage);
      },
      (error) => {
      }
    );
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  getVisibleCommits(): Commit[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.commits.slice(startIndex, endIndex);
  }

}
