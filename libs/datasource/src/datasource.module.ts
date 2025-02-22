import { Module } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({})
export class DatasourceModule {
  constructor(@InjectDataSource() private dataSource: DataSource) {}
}
