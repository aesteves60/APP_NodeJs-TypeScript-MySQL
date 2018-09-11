import { Dao } from '../lib/dao';

export class Api_keyDao {

  private db;

  constructor() {
    this.db = new Dao();
  }

  get(apiKey : string) {
    return this.db.execQuery(`SELECT * FROM ap_api_key WHERE api_key = '${apiKey}'`)
      .then((value) => {
        if (value.length === 0) throw 'api_key not found';
        else if (value[0].active === 0) throw 'API Key is temporary disabled';
        else return value;
      });
  }
}
