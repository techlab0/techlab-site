const sgMail = require('@sendgrid/mail');

export default async function handler(req, res) {
  // セキュリティヘッダー設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // プリフライトリクエスト対応
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // POST以外を拒否
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  // 環境変数チェック
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY not configured');
    return res.status(500).json({ 
      success: false,
      message: 'Server configuration error' 
    });
  }

  // SendGrid初期化
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, company, message } = req.body;

  // 入力値バリデーション
  const validationErrors = [];
  
  if (!name || name.trim().length < 2) {
    validationErrors.push('お名前は2文字以上で入力してください');
  }
  
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    validationErrors.push('有効なメールアドレスを入力してください');
  }
  
  if (!message || message.trim().length < 10) {
    validationErrors.push('相談内容は10文字以上で入力してください');
  }
  
  if (validationErrors.length > 0) {
    return res.status(400).json({ 
      success: false,
      message: 'バリデーションエラー',
      errors: validationErrors
    });
  }

  // HTML/XSS対策
  const sanitize = (str) => str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  const sanitizedData = {
    name: sanitize(name.trim()),
    email: email.trim().toLowerCase(),
    company: company ? sanitize(company.trim()) : '未記入',
    message: sanitize(message.trim())
  };

  // タイムスタンプ
  const timestamp = new Date().toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  try {
    // 管理者への通知メール
    const adminNotification = {
      to: 'techlab0web3@gmail.com',
      from: {
        email: 'techlab0web3@gmail.com',
        name: 'TechLab Contact Form'
      },
      subject: `【TechLab】新規お問い合わせ - ${sanitizedData.name}様`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">新しいお問い合わせ</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0;">TechLab Contact Form</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <div style="border-left: 4px solid #00d4aa; padding-left: 20px; margin-bottom: 25px;">
              <h2 style="color: #2d3748; margin: 0 0 5px 0; font-size: 18px;">お客様情報</h2>
              <p style="color: #718096; margin: 0; font-size: 14px;">受信日時: ${timestamp}</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568; width: 120px;">お名前</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #2d3748;">${sanitizedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">メールアドレス</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #2d3748;">
                  <a href="mailto:${sanitizedData.email}" style="color: #667eea; text-decoration: none;">${sanitizedData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4a5568;">会社名</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #2d3748;">${sanitizedData.company}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4a5568; vertical-align: top;">相談内容</td>
                <td style="padding: 12px 0; color: #2d3748; line-height: 1.6;">
                  <div style="background: #f7fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${sanitizedData.message}</div>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f7fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #718096; margin: 0; font-size: 12px;">
              この通知は TechLab お問い合わせフォームから自動送信されました
            </p>
          </div>
        </div>
      `
    };

    // お客様への自動返信
    const customerAutoReply = {
      to: sanitizedData.email,
      from: {
        email: 'techlab0web3@gmail.com',
        name: 'TechLab カスタマーサポート'
      },
      subject: '【TechLab】お問い合わせを受け付けました - 自動返信',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #00d4aa 0%, #00b4d8 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">お問い合わせありがとうございます</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0;">TechLab</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <p style="color: #2d3748; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              ${sanitizedData.name} 様
            </p>
            
            <p style="color: #4a5568; line-height: 1.8; margin: 0 0 25px 0;">
              この度は、TechLabにお問い合わせいただき、誠にありがとうございます。<br>
              お客様からのお問い合わせを確実に受信いたしました。
            </p>
            
            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="color: #0369a1; margin: 0 0 10px 0; font-size: 16px;">📝 受付内容</h3>
              <p style="color: #075985; margin: 0; line-height: 1.6;">
                受付日時: ${timestamp}<br>
                お名前: ${sanitizedData.name}<br>
                会社名: ${sanitizedData.company}
              </p>
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">⏰ 今後の流れ</h3>
              <p style="color: #a16207; margin: 0; line-height: 1.6;">
                担当者がお客様のお問い合わせ内容を確認し、<strong>72時間以内</strong>にご返信いたします。<br>
                お急ぎの場合は、直接メールにてご連絡ください。
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:techlab0web3@gmail.com" style="display: inline-block; background: #00d4aa; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                直接メールで連絡する
              </a>
            </div>
          </div>
          
          <div style="background: #1a202c; color: white; padding: 25px; text-align: center;">
            <h3 style="margin: 0 0 10px 0; font-size: 18px;">TechLab</h3>
            <p style="margin: 0 0 5px 0; color: #a0aec0;">先進技術とクリエイティビティでビジネスの未来を創造</p>
            <p style="margin: 0; color: #718096; font-size: 14px;">
              Email: <a href="mailto:techlab0web3@gmail.com" style="color: #00d4aa;">techlab0web3@gmail.com</a>
            </p>
          </div>
        </div>
      `
    };

    // メール送信実行
    await Promise.all([
      sgMail.send(adminNotification),
      sgMail.send(customerAutoReply)
    ]);

    // 送信ログ記録
    console.log(`Contact form submitted successfully:`, {
      timestamp,
      name: sanitizedData.name,
      email: sanitizedData.email,
      company: sanitizedData.company
    });

    // 成功レスポンス
    res.status(200).json({ 
      success: true,
      message: 'お問い合わせを受け付けました。72時間以内にご返信いたします。'
    });

  } catch (error) {
    console.error('SendGrid送信エラー:', {
      error: error.message,
      code: error.code,
      timestamp: new Date().toISOString()
    });

    res.status(500).json({ 
      success: false,
      message: 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。'
    });
  }
}