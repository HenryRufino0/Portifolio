import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { nome, email, mensagem } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rufino.hlr@gmail.com',
      pass: 'umfg puzn wqaw okso', 
    },
  });

  try {
    await transporter.sendMail({
    from: 'Portfolio de Henry <rufino.hlr@gmail.com>',
    replyTo: email,
    to: 'rufino.hlr@gmail.com',
    subject: `Nova mensagem de ${nome}`,
    text: `Mensagem:\n${mensagem}\n\nEmail de contato: ${email}`,
    });

    return NextResponse.json({ success: true, message: 'Email enviado com sucesso.' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Erro ao enviar email.' }, { status: 500 });
  }
}
