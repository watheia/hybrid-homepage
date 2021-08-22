import { Message } from "@hybrid-homepage/api-interfaces"
import { VercelRequest, VercelResponse } from "@vercel/node"

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = "World" } = request.query
  const greeting: Message = { message: `Hello, ${name}!` }
  response.status(200).send(greeting)
}
