import { Injectable, effect, signal, computed } from '@angular/core';
import { StoryService } from './stories.service';
import { Story } from './stories.model';

@Injectable({ providedIn: 'root' })
export class StoriesStore {
  private _stories = signal<Story[]>([]);
  private _loading = signal(false);
  private _page = signal(1);
  private _searchTerm = signal('');

  readonly stories = this._stories.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly page = this._page.asReadonly();
  readonly searchTerm = this._searchTerm.asReadonly();

  private readonly pageSize = 10;

  constructor(private api: StoryService) {
    effect(() => {
      this.loadStories();
    });
  }

  setPage(page: number) {
    this._page.set(page);
  }

  setSearchTerm(term: string) {
    this._searchTerm.set(term);
    this._page.set(1); // reset to first page on search
  }

  public loadStories() {
    this._loading.set(true);

    const currentPage = this._page();
    const term = this._searchTerm();

    this.api.getStories(currentPage, this.pageSize, term).subscribe({
      next: (stories) => this._stories.set(stories),
      error: () => this._stories.set([]),
      complete: () => this._loading.set(false)
    });
  }

  //for unit purpose
  public isLoading = () => this._loading;
  public getStories = () => this.stories;

}
