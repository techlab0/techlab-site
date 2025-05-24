import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  // Gmail設定
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  try {
    // あなたへの通知メール
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'techlab0web3@gmail.com',
      subject: '【TechLab】新しいお問い合わせ',
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メール:</strong> ${email}</p>
        <p><strong>会社名:</strong> ${company || '未記入'}</p>
        <p><strong>相談内容:</strong></p>
        <p>${message}</p>
      `
    });

    // 顧客への自動返信
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: '【TechLab】お問い合わせを受け付けました',
      html: `
        <h2>お問い合わせありがとうございます</h2>
        <p>${name}様</p>
        <p>この度は、TechLabにお問い合わせいただき、ありがとうございます。</p>
        <p>72時間以内にご返信いたします。</p>
        <br>
        <p>TechLab<br>techlab0web3@gmail.com</p>
      `
    });

    res.status(200).json({ message: '送信完了' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    res.status(500).json({ message: '送信失敗' });
  }
}