/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    { username: "caoh", email: "iamcaoh@gmail.com" },
    { username: "paul", email: "iampaul@gmail.com" },
  ]);
};
