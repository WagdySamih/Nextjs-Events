import { connect, close } from "../../helpers/database"
const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const email = req.body.email;

        if (!email || !email.includes("@") || !email.includes(".")) {
          return res.status(422).json({ message: "invalid email!" })
        }

        const client = await connect();
        const db = client.db()
        await db.collection("emails").insertOne({ email })
        await close(client)

        res.status(201).json({ message: "registered successfully!" })

      } catch (error) {
        res.status(500).send({
          message: "error while registration",
          error: JSON.stringify(error)
        })
      }
    default:
      break;
  }
}

export default handler