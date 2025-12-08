// app/api/enquiry/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'thehappysafar@gmail.com';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM ?? smtpUser;

const transporter = smtpHost && smtpPort && smtpUser && smtpPass && smtpFrom
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
  : null;

export async function POST(request: NextRequest) {
  try {
    if (!transporter) {
      throw new Error('Email transporter is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM env vars.');
    }

    const formData = await request.json();
    const {
      name = 'N/A',
      email = 'N/A',
      phone = 'N/A',
      travelDate = 'N/A',
      message = 'N/A',
      source,
    } = formData ?? {};

    const subject = `New Enquiry from ${name}`;
    const travelDateText = travelDate || 'Not provided';
    const origin = source ? `Origin: ${source}` : '';

    const textBody = `New enquiry received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nTravel Date: ${travelDateText}\nMessage: ${message}\n${origin}`.trim();

    const htmlBody = `
      <h2>New enquiry received</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Travel Date</strong></td><td>${travelDateText}</td></tr>
        <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        ${origin ? `<tr><td><strong>Origin</strong></td><td>${source}</td></tr>` : ''}
      </table>
    `;

    await transporter.sendMail({
      from: smtpFrom,
      to: RECIPIENT_EMAIL,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
}