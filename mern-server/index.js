const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send("hello from node");
})

//mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://books-mern:kvimY2zG66JVRmnF@cluster0.khxyqhj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();

		//create collection of docs
		const bookCollection = client.db("BookInventory").collection("books")

		//insert a book 
		app.post("/upload-book", async (req, res) => {
			const data = req.body;
			const result = await bookCollection.insertOne(data)
			res.send(result)
		})

		//get all books
		app.get("/all-books", async (req, res) => {
			const books = bookCollection.find();
			const result = await books.toArray();
			res.send(result)
		})

		//update a book
		app.patch("/abook/:id", async (req, res) => {
			const id = req.params.id;
			const updateBookData = req.body;
			const filter = { _id: new ObjectId(id) }
			const updateDoc = {
				$set: {
					...updateBookData
				},
			}
			const options = { upsert: true };

			const result = await bookCollection.updateOne(filter, updateDoc, options)
			res.send(result);
		})
		//delete book
		app.delete("/book/:id", async (req, res) => {
			const id = req.params.id;
			const filter = { _id: new ObjectId(id) }
			const result = await bookCollection.deleteOne(filter)
			res.send(result);
		})
		// find by category
		app.get("/all-books", async (req, res) => {
			let query = {};
			if (req.query?.category) {
				query = { category: req.query.category }
			}
			const result = await bookCollection.find(query).toArray();
			res.send(result);
		})
		// get single book 
		app.get("/get-book/:id", async (req, res) => {
			const id = req.params.id;
			const filter = { _id: new ObjectId(id) }
			const result = await bookCollection.findOne(filter)
			res.send(result)
		})




		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} finally {
		// await client.close();
	}
}
run().catch(console.dir);

//mongodb config end

app.listen(port, () => {
	console.log(`listening to port ${port}`)
})