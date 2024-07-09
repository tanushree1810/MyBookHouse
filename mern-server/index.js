require('dotenv').config();

const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=${process.env.MONGODB_DB}`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const bookCollection = client.db("BookInventory").collection("books");

    // Insert a book into the database
    app.post('/upload-book', async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'An error occurred while uploading the book' });
      }
    });

    // Get all books or find by category from the database
    app.get('/all-books', async (req, res) => {
      try {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }
        const result = await bookCollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching the books' });
      }
    });

    // Update a book by ID
    app.patch('/book/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
          $set: { ...updateBookData }
        };
        const result = await bookCollection.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'An error occurred while updating the book' });
      }
    });

    // Delete a book by ID
    app.delete('/book/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollection.deleteOne(filter);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'An error occurred while deleting the book' });
      }
    });

    // Get a single book by ID
    app.get('/book/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollection.findOne(filter);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching the book' });
      }
    });

    // Ping the server to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    process.on('SIGINT', async () => {
      await client.close();
      console.log('MongoDB connection closed');
      process.exit(0);
    });
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
