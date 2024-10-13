import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read() 
      .then((data) => {
        return json(data); 
      })
      .then((jsonData) => {
        return JSON.parse(jsonData); 
      })
      .catch((error) => {
        throw new Error('Error loading game saving data');
      });
  }
}
