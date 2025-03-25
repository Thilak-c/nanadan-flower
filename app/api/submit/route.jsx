// app/api/submit/route.js
import { MongoClient } from "mongodb";

export async function POST(req) {
  const { name, phone, email, message } = await req.json();

  if (!name || !phone || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
    });
  }

  const client = new MongoClient("mongodb://localhost:27017/nandanflower");

  try {
    await client.connect();
    const db = client.db("nandanflower");
    const collection = db.collection("messages");

    const result = await collection.insertOne({
      name,
      phone,
      email,
      message,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Data submitted successfully." }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to submit data." }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
