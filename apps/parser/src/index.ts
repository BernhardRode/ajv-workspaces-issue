import Ajv, { JTDSchemaType } from 'ajv/dist/jtd'

const ajv = new Ajv()

interface EvaluatorResponse {
  comment: string
  status: string
}

const schema = {
  properties: {
    comment: { type: 'string' },
    status: { type: 'string' },
  },
  additionalProperties: false,
}
const parser = ajv.compileParser(schema)

const messages = [
 {comment: "hello", status: "ok"},
 {comment: 1, status: "ok"},
 {comment: "hello", status: 2},
 {comment: "hello"},
 {status: "ok"},
 {comment: "hello", status: "ok", wrong: "wrong"},
 {comment: 1, status: 2}
].map(a => JSON.stringify(a))

for (let index = 0; index < messages.length; index++) {
  const message = messages[index];
  // const data = JSON.parse(message)
  const data = parser(message);
  if (data === undefined) {
    console.error(parser.message);
  } else {
    console.log({data});
  }
}