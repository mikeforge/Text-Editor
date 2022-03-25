import { openDB } from 'idb';

const initdb = async () =>
  openDB('step', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('step')) {
        console.log('step database already exists');
        return;
      }
      db.createObjectStore('step', { keyPath: 'id', autoIncrement: true });
      console.log('step database created');
    },
  });

//  Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log(`adding to DB`);
  const stepDb = await openDB('step',1);
  const tx = stepDb.transaction('step','readwrite');
  const store = tx.objectStore('step');
  const request = store.put({ id: 1, value: content});
  const result = await request;
  console.log(`success in adding to DB, ${result.value}`)
}
// console.error('putDb not implemented');

//  Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const stepDb = await openDB('step',1);
  const tx = stepDb.transaction('step', 'readonly');
  const store = tx.objectStore('step');
  const request = store.put({ id: 1, value: content});
  const result = await request;
  result ? console.log(`data returned from step DB, ${result.value}`) : console.log(`data not found in step DB`);
  return result?.value;
}
// console.error('getDb not implemented');

initdb();
