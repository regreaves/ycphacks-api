import mysqlx from '@mysql/xdevapi';

export async function get_hardware_items() {
  config = {
    user: process.env.MYSQLX_USER,
    password: process.env.MYSQLX_PASSWORD,
    host: process.env.MYSQLX_HOST,
    port: Number.parseInt(process.env.MYSQLX_PORT),
    schema: process.env.MYSQLX_SCHEMA,
    tls: {
      enabled: true
    }
  };
  
  try {
    const session = await mysqlx.getSession(config);
    
    const result = await session.sql('CALL get_hardware_items();').execute();

    return await result.fetchAll();
  } catch (error) {
    console.error(error);
  }
}
