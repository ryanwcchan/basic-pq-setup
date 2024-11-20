#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
    const connectionString = process.argv[2]

    if (!connectionString) {
        console.error("Error: No connection string provided.");
        console.error("Usage: node seed.js <connection-string>");
        process.exit(1);
    }

    console.log("seeding...");
    const client = new Client({ connectionString })

    try {
        await client.connect();
        await client.query(SQL);
        console.log("Database seeded successfully.");
    } catch (err) {
        console.error("Error seeding the database:", err);
    } finally {
        await client.end();
        console.log("Done")
    }
}

main();
