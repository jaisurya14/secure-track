import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB_NAME;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local.local"
    );
}

if (!MONGODB_DB) {
    throw new Error(
        "Please define the MONGODB_DB environment variable inside .env.local.local"
    );
}

let cachedClient = null
let cachedDb = null

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb }
    }
    
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    
    let client = new MongoClient.connect(MONGODB_URI, options);
    
    await client.connect();
    
    let db = client.db(MONGODB_DB);
    
    cachedClient = client;
    cachedDb = db;
    
    return {
        client: cachedClient,
        db: cachedDb
    }
    
}