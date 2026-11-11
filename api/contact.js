// Função serverless da Vercel: recebe o formulário e envia o e-mail via Resend.
// Variáveis de ambiente (configure no painel da Vercel):
//   RESEND_API_KEY  -> chave da API do Resend
//   CONTACT_TO      -> e-mail que recebe as mensagens
//   CONTACT_FROM    -> remetente (ex.: "Portfolio <onboarding@resend.dev>" até verificar um domínio)

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name = '', email = '', subject = '', message = '', website = '' } = req.body ?? {};

  // honeypot: bots preenchem, humanos não. Responde OK sem enviar nada.
  if (website) return res.status(200).json({ ok: true });

  if (!name.trim() || !message.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  if (name.length > 200 || email.length > 200 || subject.length > 300 || message.length > 5000) {
    return res.status(400).json({ error: 'Too long' });
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO) {
    console.error('[contact] missing env vars', { RESEND_API_KEY: !!RESEND_API_KEY, CONTACT_TO: !!CONTACT_TO });
    return res.status(500).json({ error: 'Server not configured' });
  }

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM || 'Portfolio <onboarding@resend.dev>',
      to: [CONTACT_TO],
      reply_to: email,
      subject: `[Portfolio] ${subject.trim() || 'New message'} — ${name.trim()}`,
      html: `<p><strong>From:</strong> ${esc(name)} &lt;${esc(email)}&gt;</p>
             <p><strong>Subject:</strong> ${esc(subject)}</p>
             <p style="white-space:pre-wrap">${esc(message)}</p>`,
    }),
  });

  if (!r.ok) {
    console.error('[contact] Resend error', r.status, await r.text());
    return res.status(502).json({ error: 'Email provider error' });
  }
  return res.status(200).json({ ok: true });
}
