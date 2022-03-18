import { connect, close } from "../../../helpers/database"

const handler = async (req, res) => {
  const { eventId } = req.query
  switch (req.method) {
    case "GET":
      try {
        const client = await connect();
        const db = client.db();
        const comments = await db.collection("comments")
          .find({ eventId })
          .sort({ _id: -1 })
          .toArray()
        await close(client)

        return res.status(200).json({
          message: "comments retrieved successfully!",
          comments
        })
      } catch (error) {
        return res.status(500).send({
          message: "error retrieving comments",
          error
        })
      }


    case "POST":
      try {
        const { email, name, text } = req.body;
        const isValidEmail = email.trim() != "" && email.includes("@") && email.includes(".")
        const isValidName = name.trim() != ""
        const isValidText = text.trim() != ""
        if (!isValidEmail) {
          return res.status(422).json({ message: "please enter valid email" })
        }
        if (!isValidName) {
          return res.status(422).json({ message: "please enter valid name" })
        }
        if (!isValidText) {
          return res.status(422).json({ message: "please enter valid comment text" })
        }

        const comment = {
          eventId,
          name,
          email,
          text
        }

        const client = await connect();
        const db = client.db()
        const newComment = await db.collection("comments").insertOne(comment)
        await close(client)

        res.status(201).send({
          message: "comment is created successfully",
          comment: newComment
        })

      } catch (error) {
        console.log({ error })
        res.status(500).send({ message: "error creating new comment", error })
      }
    default:
      break;
  }
}

export default handler