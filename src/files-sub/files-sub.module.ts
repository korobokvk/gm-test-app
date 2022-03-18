import { Module } from '@nestjs/common';

import { FilesSubResolver } from './files-sub.resolver';

@Module({
  imports: [],
  providers: [FilesSubResolver],
})
export class FilesSubModule {}
