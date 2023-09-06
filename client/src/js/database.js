import { openDB } from 'idb';

const initdb = async () =>
	openDB('jate', 1, {
		upgrade(db) {
			if (db.objectStoreNames.contains('jate')) {
				console.log('jate database already exists');
				return;
			}
			db.createObjectStore('jate', {
				keyPath: 'id',
				autoIncrement: true,
			});
			console.log('jate database created');
		},
	});

// Logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
	const connection = await openDB('jate', 1);
	const transaction = connection.transaction('jate', 'readwrite');
	const dataStore = transaction.objectStore('jate');
	const request = dataStore.add({ jate: content });
	const result = await request;
	console.log('Data stored to the database', result);
};

// Logic for a method that gets all the content from the database
export const getDb = async () => {
	console.log('GET all from the database');
	const connection = await openDB('jate', 1);
	const transaction = connection.transaction('jate', 'readonly');
	const dataStore = transaction.objectStore('jate');
	const request = dataStore.getAll();
	const result = await request;
	console.log('result.value', result);
	return result.value;
};

initdb();
