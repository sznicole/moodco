import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('*', cors())

type Mood = {
  emoji: string;
  mood: string;
}

const moods: Mood[] = []; //Stores options that the user can click
const moodHistory: Mood[] = []; //Stores the user's mood history

app.get('/', (c) => {
  return c.text('Hello! How are you feeling today?')
})

//Enters moods into the array, moodHistory
app.post('/api/moods', async (c) => {
  const mood: Mood = await c.req.json()
  moodHistory.push(mood)
  return c.json({success: true})
})

//Returns the mood history to the userad
app.get('/api/moods', (c) => {
  return c.json(moodHistory);
})


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
