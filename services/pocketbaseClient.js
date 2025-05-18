import PocketBase from 'pocketbase';
console.log("PocketBase URL:", process.env.POCKETBASE_URL);
const pb = new PocketBase(process.env.POCKETBASE_URL);
export default pb;
