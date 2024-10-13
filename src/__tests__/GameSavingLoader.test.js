import GameSavingLoader from '../GameSavingLoader.js';
import read from '../reader.js';
import json from '../parser.js';

jest.mock('../reader.js');
jest.mock('../parser.js');

describe('GameSavingLoader', () => {
  test('should correctly load and parse data', () => {
    read.mockResolvedValue(new ArrayBuffer(0)); 
    json.mockResolvedValue('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'); 

    return GameSavingLoader.load().then((saving) => {
      expect(saving).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1,
          name: 'Hitman',
          level: 10,
          points: 2000,
        },
      });
    });
  });

  test('should throw error when reading fails', () => {
    read.mockRejectedValue(new Error('Read error'));
    
    return expect(GameSavingLoader.load()).rejects.toThrow('Error loading game saving data');
  });

  test('should throw error when parsing fails', () => {
    read.mockResolvedValue(new ArrayBuffer(0));
    json.mockRejectedValue(new Error('Parse error'));
    
    return expect(GameSavingLoader.load()).rejects.toThrow('Error loading game saving data');
  });
});
