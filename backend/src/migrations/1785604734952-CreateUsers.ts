import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1785604734952 implements MigrationInterface {
  name = 'CreateUsers1785604734952';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" UNIQUEIDENTIFIER NOT NULL CONSTRAINT "DF_users_id" DEFAULT NEWSEQUENTIALID(),
        "fullName" NVARCHAR(255) NOT NULL,
        "username" NVARCHAR(100) NOT NULL,
        "cpf" NVARCHAR(11) NOT NULL,
        "passwordHash" NVARCHAR(255) NOT NULL,
        "createdAt" DATETIME2 NOT NULL CONSTRAINT "DF_users_createdAt" DEFAULT SYSUTCDATETIME(),
        "updatedAt" DATETIME2 NOT NULL CONSTRAINT "DF_users_updatedAt" DEFAULT SYSUTCDATETIME(),
        CONSTRAINT "PK_users_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_users_username" UNIQUE ("username"),
        CONSTRAINT "UQ_users_cpf" UNIQUE ("cpf")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
