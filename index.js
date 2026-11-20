import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

export async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client;
    } catch (err) {
        console.dir(err);
    }
}

const connectedClient = await connectToMongoDB();
export const database = connectedClient ? connectedClient.db(process.env.DB_NAME || "salonbook") : null;

app.get('/', (req, res) => {
    res.send('salonbook server is running');
});

app.listen(port, () => {
    console.log(`salonbook server is running on port ${port}`);
});

export default app;
