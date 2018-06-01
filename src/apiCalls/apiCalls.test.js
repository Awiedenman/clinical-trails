import React from 'react';
import { searchDataCall } from './apiCalls';


describe('apiCalls', () => {
  const mockData = {
    "id": "cabb91cc-46b9-11e7-ba62-0242ac12000d",
    "source_id": "isrctn",
    "identifiers": {
      "isrctn": "ISRCTN15621797"
    }
  }

  describe('searchDataCall', () => {

    it('returns the correct informaiton', async() => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve( mockData )
      }))
      const result = await searchDataCall('breast cancer');
      const expected = mockData;

      expect(result).toEqual(expected);
    })

    it('calls the fetch with the correct parametrs', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData)
      }))
      
      const expected = `https://api.opentrials.net/v1/search?q=breast cancer&page=1&per_page=100`;

      searchDataCall('breast cancer');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('returns an error if the status is bad', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
      const mockCondition = 'breast cancer';
      const expected = Error('Status failure: 500');
      const result =  await searchDataCall(mockCondition);

      expect(result).toEqual(expected);

    })

  })
})