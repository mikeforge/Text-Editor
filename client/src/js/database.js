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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log(`adding to DB`);
  const stepDb = await openDB('step',1);
  const tx = stepDb.transcation('step','readwrite');
  const store = tx.objectStore('step');
  const request = store.put({ id: 1, value: content});
  const result = await request;
  console.log(`success in adding to DB, ${result.value}`)
}
// console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
