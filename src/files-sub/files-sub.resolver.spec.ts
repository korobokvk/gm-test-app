import { Test, TestingModule } from '@nestjs/testing';
import { FilesSubResolver } from './files-sub.resolver';

describe('FilesSubResolver', () => {
  let resolver: FilesSubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilesSubResolver],
    }).compile();

    resolver = module.get<FilesSubResolver>(FilesSubResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
