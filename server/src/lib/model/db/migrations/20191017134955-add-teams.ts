export const up = async function (db: any): Promise<any> {
  return db.runSql(
    `
    CREATE TABLE teams (
      team_name VARCHAR(255) PRIMARY KEY,
      invite_token VARCHAR(1000) DEFAULT '',
      logo_url VARCHAR(1000) NOT NULL DEFAULT '',
      created_at DATETIME DEFAULT now()
    );
    `
  );
};

export const down = function (): Promise<any> {
  return null;
};
