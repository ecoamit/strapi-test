module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', env('DATABASE_HOST', '127.0.0.1')),
      port: env.int('PGPORT', env.int('DATABASE_PORT', 5432)),
      database: env('PGDATABASE', env('DATABASE_NAME', 'strapi')),
      user: env('PGUSER', env('DATABASE_USERNAME', 'strapi')),
      password: env('PGPASSWORD', env('DATABASE_PASSWORD', 'password')),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
      },
    },
    debug: false,
  },
});