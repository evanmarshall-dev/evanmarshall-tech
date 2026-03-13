const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const ses = new SESClient({ region: 'us-east-1' });

exports.handler = async (event) => {
  const headers = {
    // 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Origin': 'https://www.evanmarshall.tech',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const body = JSON.parse(event.body);
    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email address' }),
      };
    }

    // const emailParams = {
    //   Source: 'me@evanmarshall.dev',
    //   Destination: {
    //     ToAddresses: ['me@evanmarshall.dev'],
    //   },
    //   Message: {
    //     Subject: { Data: `New Contact Form: ${service}` },
    //     Body: {
    //       Text: {
    //         Data: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    //       },
    //     },
    //   },
    // };

    const emailParams = {
      Source: 'me@evanmarshall.dev',
      Destination: {
        ToAddresses: ['me@evanmarshall.dev'],
      },
      Message: {
        Subject: { Data: `🔔 New ${service} Inquiry from ${name}` },
        Body: {
          Html: {
            Data: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #4CAF50; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
              .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .message-box { background-color: white; padding: 15px; border-left: 4px solid #4CAF50; margin-top: 10px; }
              .footer { text-align: center; color: #888; font-size: 12px; margin-top: 20px; }
              a { color: #4CAF50; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>✉️ New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">From:</span> ${name}
                </div>
                <div class="field">
                  <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
                </div>
                <div class="field">
                  <span class="label">Service Interested In:</span> ${service}
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                <div class="footer">
                  <p>Submitted on ${new Date().toLocaleString('en-US', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                    timeZone: 'America/Halifax',
                  })}</p>
                  <p>Reply directly to <a href="mailto:${email}">${email}</a></p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
          },
          Text: {
            Data: `
New Contact Form Submission

From: ${name}
Email: ${email}
Service: ${service}

Message:
${message}

Submitted at: ${new Date().toLocaleString()}

Reply to: ${email}
        `,
          },
        },
      },
    };

    await ses.send(new SendEmailCommand(emailParams));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
      }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        details: error.message,
      }),
    };
  }
};
