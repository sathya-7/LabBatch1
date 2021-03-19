import { TestBed } from '@angular/core/testing';

import { UserRoleServerService } from './user-role-server.service';

describe('UserRoleServerService', () => {
  let service: UserRoleServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRoleServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
