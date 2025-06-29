module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL') ? {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: false,
      },
    } : {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'password'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});