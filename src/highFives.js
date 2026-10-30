// This is a private project which is publicly open. Used to dogfood Datadog products.
const EVENTS_URL =
  'https://safranke-kusto-node-api.azurewebsites.net/v1/events?name=highfive&database=DataDog&table=Events'
const HIGH_FIVE_EVENT = 'highfive'

export const loadHighFives = async () => {
  const response = await fetch(EVENTS_URL)
  if (!response.ok) {
    throw new Error(`Failed to load high fives: ${response.status}`)
  }
  const body = await response.json()
  const records = Array.isArray(body) ? body : (body.records ?? [])
  return records
    .filter((record) => record.name === HIGH_FIVE_EVENT)
    .reduce((max, record) => Math.max(max, Number(record.properties?.count) || 0), 0)
}

export const saveHighFives = async (count) => {
  // The API doesn't send CORS headers, so post as a simple request (text/plain
  // body, no-cors). The server still parses the body as JSON.
  await fetch(EVENTS_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      database: 'DataDog',
      table: 'Events',
      records: [
        {
          name: HIGH_FIVE_EVENT,
          user_id: 'u1',
          properties: { count: String(count) },
        },
      ],
    }),
  })
}
