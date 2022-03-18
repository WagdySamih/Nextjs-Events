const handler = (req, res) => {
  // const { eventId } = req.params
  switch (req.method) {
    case "GET":
      res.status(200).json({
        message: "retrieved successfully!",
        comments: [{
          id: "c1",
          author: "wagdy samih",
          text: "this is my 1st email"
        }, {
          id: "c2",
          author: "Mariam",
          text: "this is my 2st email"
        }]
      })


    case "POST":
      try {
        const { email, name, text } = req.body;
        const isValidEmail = email.trim() != "" && email.includes("@") && email.includes(".")
        const isValidName = name.trim() != ""
        const isValidText = text.trim() != ""
        if (!isValidEmail) {
          res.status(422).json({ message: "please enter valid email" })
        }
        if (!isValidName) {
          res.status(422).json({ message: "please enter valid name" })
        }
        if (!isValidText) {
          res.status(422).json({ message: "please enter valid comment text" })
        }

        const comment = {
          id: new Date().toISOString(),
          name,
          email,
          text
        }
        res.status(201).send({ message: "comment is created successfully", comment })

      } catch (error) {
        res.status(500).send({ message: "something went wrong", error })
      }
    default:
      break;
  }
}

export default handler