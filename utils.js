import nodemailer from "nodemailer";
import path from 'path';
import crypto from "crypto";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}<>?';
    const bytes = crypto.randomBytes(16);
    return Array.from(bytes).map(b => charset[b % charset.length]).join('');
}

const sendEmail = async (email, password) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'in-v3.mailjet.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAILJET_API_KEY,
                pass: process.env.MAILJET_SECRET_KEY,
            }
        });

        const mailOptions = {
            from: process.env.MAILJET_SENDER,
            to: email,
            subject: 'Your password',
            text: `Hi! You've seen to have forgotten your password.\nWe've generated a new one for you. Here it is: ${password}`,
        };

        await transporter.sendMail(mailOptions);
    }
    catch (err) {
        console.error(err);
    }
}

export { __filename, __dirname, generatePassword, sendEmail };