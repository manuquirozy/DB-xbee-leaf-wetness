import {MigrationInterface, QueryRunner} from "typeorm";

export class createRecordingsTable1633721811863 implements MigrationInterface {
    name = 'createRecordingsTable1633721811863'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "readings" ("id" SERIAL NOT NULL, "device_number" double precision NOT NULL, "temperature" double precision NOT NULL, "humidity" double precision NOT NULL, "vapor" double precision NOT NULL, "battery" double precision NOT NULL, "last_update" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'now()', CONSTRAINT "PK_a0f3aa79140b41884f2e53ba52a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "readings"`);
    }

}
