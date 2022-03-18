import { Test, TestingModule } from '@nestjs/testing';
import { FilesSubService } from './files-sub.service';

describe('FilesSubService', () => {
  let service: FilesSubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilesSubService],
    }).compile();

    service = module.get<FilesSubService>(FilesSubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
