const handler = (req, res) => {
  switch (req.method) {
    case "POST":
      const email = req.body.email;
      // basic email validation
      if (!email || !email.includes("@") || !email.includes(".")) {
        return res.status(422).json({ message: "invalid email!" })
      }

      res.status(201).json({ message: "registered successfully!" })

    default:
      break;
  }
}

export default handler