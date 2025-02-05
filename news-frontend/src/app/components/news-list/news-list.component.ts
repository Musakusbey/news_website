import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"],
})
export class NewsListComponent implements OnInit {
  news: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlines("tr").then(response => {
      this.news = response.data.articles;
    });
  }
}
