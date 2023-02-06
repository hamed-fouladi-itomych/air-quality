import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AirQualityMigration1580410030307 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'air_quality',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'datetime',
            type: 'timestamp',
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ts',
            type: 'varchar',
          },
          {
            name: 'aqius',
            type: 'integer',
          },
          {
            name: 'mainus',
            type: 'varchar',
          },
          {
            name: 'aqicn',
            type: 'integer',
          },
          {
            name: 'maincn',
            type: 'varchar',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('air_quality');
  }
}
