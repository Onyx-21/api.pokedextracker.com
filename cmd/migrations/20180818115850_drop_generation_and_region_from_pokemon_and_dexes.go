package main

import (
	"github.com/go-pg/pg/orm"
	"github.com/robinjoseph08/go-pg-migrations"
)

func init() {
	up := func(db orm.DB) error {
		if _, err := db.Exec(`
			ALTER TABLE pokemon
				DROP COLUMN generation,
				DROP COLUMN kanto_id,
				DROP COLUMN johto_id,
				DROP COLUMN hoenn_id,
				DROP COLUMN sinnoh_id,
				DROP COLUMN unova_id,
				DROP COLUMN central_kalos_id,
				DROP COLUMN coastal_kalos_id,
				DROP COLUMN mountain_kalos_id,
				DROP COLUMN alola_id
		`); err != nil {
			return err
		}
		_, err := db.Exec(`
			ALTER TABLE dexes
				DROP COLUMN generation,
				DROP COLUMN region
		`)
		return err
	}

	down := func(db orm.DB) error {
		if _, err := db.Exec(`
			ALTER TABLE pokemon
				ADD COLUMN generation INTEGER,
				ADD COLUMN kanto_id INTEGER,
				ADD COLUMN johto_id INTEGER,
				ADD COLUMN hoenn_id INTEGER,
				ADD COLUMN sinnoh_id INTEGER,
				ADD COLUMN unova_id INTEGER,
				ADD COLUMN central_kalos_id INTEGER,
				ADD COLUMN coastal_kalos_id INTEGER,
				ADD COLUMN mountain_kalos_id INTEGER,
				ADD COLUMN alola_id INTEGER
		`); err != nil {
			return err
		}
		_, err := db.Exec(`
			ALTER TABLE dexes
				ADD COLUMN generation INTEGER,
				ADD COLUMN region TEXT
		`)
		return err
	}

	opts := migrations.MigrationOptions{}

	migrations.Register("20180818115850_drop_generation_and_region_from_pokemon_and_dexes", up, down, opts)
}