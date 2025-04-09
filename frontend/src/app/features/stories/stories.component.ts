import { Component  } from '@angular/core';
import { StoriesStore } from './stories.store';

@Component({
  selector: 'app-stories',
  standalone: true,
  templateUrl: './stories.component.html',
  styleUrls:['./stories.component.css']
})
export class StoriesComponent 
{
  constructor(public store: StoriesStore) {}

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.store.setSearchTerm(input.value);
  }

  nextPage() {
    this.store.setPage(this.store.page() + 1);
  }

  prevPage() {
    const newPage = this.store.page() - 1;
    if (newPage > 0) this.store.setPage(newPage);
  }
}


