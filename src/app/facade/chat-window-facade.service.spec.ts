import { TestBed } from '@angular/core/testing';

import { ChatWindowFacadeService } from './chat-window-facade.service';

describe('ChatWindowFacadeService', () => {
  let service: ChatWindowFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatWindowFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
