// /pages/api/sendSMS.ts
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_MESSAGING_SERVICE_SID = process.env.TWILIO_MESSAGING_SERVICE_SID;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, productTitle } = req.body;

  if (!name || !phone || !productTitle) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const messageBody = `ana haitham I am testing this website, the user name is ${name} and the phone number is ${phone}. tkhawar meana wchra l produit l khari ${productTitle}`;

  try {
    const response = await fetch('https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_ACCOUNT_SID + '/Messages.json', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: '+212688007649', // receiver's phone number
        Body: messageBody,
        MessagingServiceSid: TWILIO_MESSAGING_SERVICE_SID,
      }),
    });
    console.log(response)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send SMS');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
