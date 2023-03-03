import mysqlx from '@mysql/xdevapi';

export const config = {
  user: process.env.MYSQLX_USER,
  password: process.env.MYSQLX_PASSWORD,
  host: process.env.MYSQLX_HOST,
  port: Number.parseInt(process.env.MYSQLX_PORT),
  schema: process.env.MYSQLX_SCHEMA,
  tls: {
    enabled: true
  }
};

export async function list_hardware_items(config) {
  try {
    const session = await mysqlx.getSession(config);

    const data    = await session.sql('SELECT * FROM hardware_items;').execute();
    const all     = await data.fetchAll();

    return all;
  } catch (error) {
    console.error(error);
  }
}
