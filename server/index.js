import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['https://blingadz.com', 'http://localhost:3000', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', brand: 'BlingAdz', parent: 'UPIADS', timestamp: new Date() });
});

// Contact endpoint (receives name, email, message)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    console.log(`[BlingAdz Lead Received] Name: ${name}, Email: ${email}`);

    // In production, forward to sales@blingadz.com via Resend API or SMTP
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'leads@blingadz.com',
    //   to: 'sales@blingadz.com',
    //   subject: `New Campaign Inquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    // });

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to BlingAdz. We will connect with you shortly.',
    });
  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({ error: 'Failed to process inquiry.' });
  }
});

app.listen(PORT, () => {
  console.log(`BlingAdz API server running on port ${PORT}`);
});