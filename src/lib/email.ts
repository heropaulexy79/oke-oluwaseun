import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';
const FROM_NAME = 'Oke Oluwaseun';
const FROM = `${FROM_NAME} <${FROM_EMAIL}>`;

// ─── Webinar Confirmation ──────────────────────────────────────────────────

export async function sendWebinarConfirmation(to: string, name: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to,
      subject: "✅ You're Registered — Identity Crisis Webinar",
      html: webinarEmailHtml(name),
    });

    if (error) {
      console.error('Resend Error (Webinar):', error);
      throw error;
    }

    return data;
  } catch (err) {
    console.error('Email send failed:', err);
    throw err;
  }
}

function webinarEmailHtml(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Confirmed</title>
</head>
<body style="margin:0;padding:0;background:#050B1F;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050B1F;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0A1229 0%,#0D1A3A 100%);border-radius:16px 16px 0 0;padding:40px 48px 32px;border-bottom:2px solid #C9A84C;">
              <img src="https://okeoluwaseun.vercel.app/full%20main%20logo%20white.png" alt="Oke Oluwaseun" width="160" style="display:block;margin-bottom:24px;max-width:160px;" />
              <h1 style="margin:0;font-size:32px;color:#ffffff;line-height:1.2;font-weight:300;font-style:italic;">Identity Crisis<span style="font-weight:700;font-style:normal;">Webinar</span></h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#0A1229;padding:40px 48px;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;color:#C9A84C;font-weight:700;text-transform:uppercase;">You're In</p>
              <h2 style="margin:0 0 24px;font-size:26px;color:#ffffff;font-weight:400;">Hi ${name}, your spot is confirmed 🎉</h2>
              <p style="margin:0 0 32px;font-size:16px;color:rgba(255,255,255,0.7);line-height:1.7;">
                Thank you for registering for the <strong style="color:#ffffff;">Identity Crisis Webinar</strong>.
                We can't wait to see you there. This is going to be a life-changing session.
              </p>

              <!-- Event Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;margin-bottom:32px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <p style="margin:0 0 20px;font-size:11px;letter-spacing:3px;color:#C9A84C;font-weight:700;text-transform:uppercase;">Event Details</p>
                    <table cellpadding="0" cellspacing="0">
                      <tr><td style="padding:8px 0;">
                        <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1px;font-weight:600;">📅 Date</p>
                        <p style="margin:4px 0 0;font-size:17px;color:#ffffff;font-weight:500;">April 26th, 2026</p>
                      </td></tr>
                      <tr><td style="padding:8px 0;">
                        <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1px;font-weight:600;">🕖 Time</p>
                        <p style="margin:4px 0 0;font-size:17px;color:#ffffff;font-weight:500;">7:00 PM WAT</p>
                      </td></tr>
                      <tr><td style="padding:8px 0;">
                        <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1px;font-weight:600;">📍 Platform</p>
                        <p style="margin:4px 0 0;font-size:17px;color:#ffffff;font-weight:500;">Google Meet (link via WhatsApp group)</p>
                      </td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px;font-size:15px;color:rgba(255,255,255,0.6);line-height:1.7;">
                The meeting link will be shared in the <strong style="color:#ffffff;">WhatsApp community</strong> closer to the event.
                Join the group now so you don't miss it:
              </p>

              <!-- WhatsApp Button -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#25D366;border-radius:8px;">
                    <a href="https://chat.whatsapp.com/EvMIsewHFqmG3RJiSwZZd6"
                       style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:1px;">
                      📲 Join WhatsApp Group
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Quote -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-left:3px solid #C9A84C;margin-bottom:32px;">
                <tr>
                  <td style="padding:4px 20px;">
                    <p style="margin:0;font-size:17px;color:rgba(255,255,255,0.8);line-height:1.7;font-style:italic;">
                      "When you discover who you truly are, you unlock everything you were created to do."
                    </p>
                    <p style="margin:12px 0 0;font-size:12px;color:#C9A84C;font-weight:700;letter-spacing:2px;text-transform:uppercase;">— Oke Oluwaseun</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.5);line-height:1.7;">
                See you on the 26th.<br/>
                <strong style="color:#ffffff;">— Oke Oluwaseun</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#050B1F;border-radius:0 0 16px 16px;padding:24px 48px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);letter-spacing:3px;text-transform:uppercase;">
                OKE OLUWASEUN • IDENTITY CRISIS WEBINAR 2026
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function generalEmailHtml(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Confirmed</title>
</head>
<body style="margin:0;padding:0;background:#050B1F;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050B1F;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0A1229 0%,#0D1A3A 100%);border-radius:16px 16px 0 0;padding:40px 48px 32px;border-bottom:2px solid #C9A84C;">
              <img src="https://okeoluwaseun.vercel.app/full%20main%20logo%20white.png" alt="Oke Oluwaseun" width="160" style="display:block;margin-bottom:24px;max-width:160px;" />
              <h1 style="margin:0;font-size:32px;color:#ffffff;line-height:1.2;font-weight:300;">Maximize <span style="font-weight:700;color:#C9A84C;font-style:italic;">Nation</span></h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#0A1229;padding:40px 48px;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;color:#C9A84C;font-weight:700;text-transform:uppercase;">Welcome to the Movement</p>
              <h2 style="margin:0 0 24px;font-size:26px;color:#ffffff;font-weight:400;">Hi ${name}, you're officially registered 🎉</h2>
              <p style="margin:0 0 32px;font-size:16px;color:rgba(255,255,255,0.7);line-height:1.7;">
                Thank you for taking this step. You have joined a growing community of value-driven leaders
                committed to identity, purpose, and global impact.
              </p>

              <!-- What's Next -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;margin-bottom:32px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <p style="margin:0 0 20px;font-size:11px;letter-spacing:3px;color:#C9A84C;font-weight:700;text-transform:uppercase;">What Happens Next</p>
                    <table cellpadding="0" cellspacing="0">
                      <tr><td style="padding:10px 0;font-size:15px;color:rgba(255,255,255,0.75);line-height:1.6;">
                        <span style="color:#C9A84C;font-weight:700;">01 —</span> You'll receive further details via email as the event approaches.
                      </td></tr>
                      <tr><td style="padding:10px 0;font-size:15px;color:rgba(255,255,255,0.75);line-height:1.6;">
                        <span style="color:#C9A84C;font-weight:700;">02 —</span> Join our WhatsApp community to stay connected with the movement.
                      </td></tr>
                      <tr><td style="padding:16px 0 10px;">
                        <a href="https://chat.whatsapp.com/EvMIsewHFqmG3RJiSwZZd6"
                           style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 28px;border-radius:8px;letter-spacing:0.5px;">
                          📲 Join WhatsApp Group
                        </a>
                      </td></tr>
                      <tr><td style="padding:10px 0;font-size:15px;color:rgba(255,255,255,0.75);line-height:1.6;">
                        <span style="color:#C9A84C;font-weight:700;">03 —</span> Show up ready to be transformed.
                      </td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Quote -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-left:3px solid #C9A84C;margin-bottom:32px;">
                <tr>
                  <td style="padding:4px 20px;">
                    <p style="margin:0;font-size:17px;color:rgba(255,255,255,0.8);line-height:1.7;font-style:italic;">
                      "When you build people from the inside out, the impact on their world becomes inevitable."
                    </p>
                    <p style="margin:12px 0 0;font-size:12px;color:#C9A84C;font-weight:700;letter-spacing:2px;text-transform:uppercase;">— Oke Oluwaseun</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.5);line-height:1.7;">
                Welcome to the Nation.<br/>
                <strong style="color:#ffffff;">— Oke Oluwaseun</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#050B1F;border-radius:0 0 16px 16px;padding:24px 48px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);letter-spacing:3px;text-transform:uppercase;">
                OKE OLUWASEUN • MAXIMIZE NATION 2026
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}


// ─── General / Maximize Nation Confirmation ────────────────────────────────

export async function sendGeneralConfirmation(to: string, name: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to,
      subject: '✅ Registration Confirmed — Maximize Nation',
      html: generalEmailHtml(name),
    });

    if (error) {
      console.error('Resend Error (General):', error);
      throw error;
    }

    return data;
  } catch (err) {
    console.error('Email send failed:', err);
    throw err;
  }
}
