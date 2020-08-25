module.exports = {
  "development": {
    "username": "postgres",
    "password": "123456",
    "database": "burguer_queen",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "new_store_test",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "postgres",
    "password": null,
    "database": "new_store_production",
    "host": "db",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}