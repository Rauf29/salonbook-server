import cors from 'cors';
import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('salonbook server is running');
});

app.listen(port, () => {
	console.log(`salonbook server is running on port ${port}`);
});

export default app;
