import { TestBed } from '@angular/core/testing';
import { StoriesStore } from './stories.store';
import { StoryService } from './stories.service';
import { of } from 'rxjs';
import { Story } from './stories.model';

describe('StoriesStore', () => {
  let store: StoriesStore;
  let storyServiceSpy: jasmine.SpyObj<StoryService>;

  const mockStories: Story[] = [
    { id: 1, title: 'Test 1', url: 'https://test1.com', author: 'Author1', postedAt: new Date() },
    { id: 2, title: 'Test 2', url: 'https://test2.com', author: 'Author2', postedAt: new Date() }
  ];

  beforeEach(() => {
    const spy = jasmine.createSpyObj('StoryService', ['getStories']);

    TestBed.configureTestingModule({
      providers: [
        StoriesStore,
        { provide: StoryService, useValue: spy }
      ]
    });

    store = TestBed.inject(StoriesStore);
    storyServiceSpy = TestBed.inject(StoryService) as jasmine.SpyObj<StoryService>;
  });

  it('should load stories and update store state', () => {
    storyServiceSpy.getStories.and.returnValue(of(mockStories));
    store.loadStories();
    expect(store.isLoading()).toBeFalse();
    expect(store.getStories().length).toBe(2);
  });

  it('should set page number and search term', () => {
    store.setPage(2);
    store.setSearchTerm('angular');

    // These properties are private signals but you can test indirectly
    storyServiceSpy.getStories.and.returnValue(of([]));
    store.loadStories();

    expect(storyServiceSpy.getStories).toHaveBeenCalledWith(2, 10, 'angular');
  });
});
