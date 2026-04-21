module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body ?? {};
  const id   = data?.email_id ?? data?.id ?? 'unknown';
  const to   = data?.to?.[0] ?? data?.to ?? 'unknown';
  const ts   = data?.created_at ?? new Date().toISOString();

  switch (type) {
    case 'email.delivered':
      console.log(`[delivered] id=${id} to=${to} at=${ts}`);
      break;
    case 'email.opened':
      console.log(`[opened]    id=${id} to=${to} at=${ts}`);
      break;
    case 'email.clicked':
      console.log(`[clicked]   id=${id} to=${to} url=${data?.click?.link ?? 'unknown'} at=${ts}`);
      break;
    case 'email.bounced':
      console.log(`[bounced]   id=${id} to=${to} reason=${data?.bounce?.message ?? 'unknown'} at=${ts}`);
      break;
    default:
      console.log(`[unknown]   type=${type} id=${id} at=${ts}`);
  }

  return res.status(200).json({ received: true });
};
