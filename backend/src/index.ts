import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('*', cors())

//Mood type; same as defined in page.tsx
type Mood = {
  emoji: string;
  mood: string;
}

const moodHistory: Mood[] = []; //Stores the user's mood history

//Enters moods into the array, moodHistory
app.post('/api/moods', async (c) => {
  const mood: Mood = await c.req.json()
  moodHistory.push(mood)
  return c.json({success: true})
})

//Returns the mood history to the user
app.get('/api/moods', (c) => {
  return c.json(moodHistory);
})


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
