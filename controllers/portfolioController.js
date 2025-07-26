/*import nodemailer from "nodemailer";
import sendGridTransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Transporter configuration
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Send email
    await transporter.sendMail({
      to: "typeyouremailadresshere@gmail.com",
      from: "typeyouremailadresshere@gmail.com",
      subject: "Regarding MERN Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p><strong>Name:</strong> ${name}</p></li>
          <li><p><strong>Email:</strong> ${email}</p></li>
          <li><p><strong>Message:</strong> ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your message was sent successfully!",
    });
  } catch (error) {
    console.error("Send Email API Error:", error);
    return res.status(500).json({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

export default sendEmailController;*/



/*import nodemailer from "nodemailer";



const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    const transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
            service:process.env.SMTP_SERVICE,
            port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD,
        },
    }
      
    );


    // Send email
    await transporter.sendMail({
      to: email,
      from: process.env.SMTP_MAIL,
      subject: "Regarding MERN Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p><strong>Name:</strong> ${name}</p></li>
          <li><p><strong>Email:</strong> ${email}</p></li>
          <li><p><strong>Message:</strong> ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your message was sent successfully!",
    });
  } catch (error) {
    console.error("Send Email API Error:", error);
    return res.status(500).json({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

export default sendEmailController;*/

import nodemailer from "nodemailer";

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // 🔹 Validation
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    // 🔹 Create Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      service: process.env.SMTP_SERVICE, // e.g., "gmail"
      port: process.env.SMTP_PORT, // Usually 587 for TLS or 465 for SSL
      secure: process.env.SMTP_PORT === "465", // Secure for port 465
      auth: {
        user: process.env.SMTP_MAIL, // Your email (e.g., yourname@gmail.com)
        pass: process.env.SMTP_PASSWORD, // Your app password
      },
    });

    // 🔹 Send Email
    try {
      await transporter.sendMail({
        from: email , // Your email
        to: process.env.SMTP_MAIL, // Your email (receiver)
        replyTo: email, // User's email for reply
        subject: "New Contact Message from Your Portfolio",
        html: `
          <h2>New Message from Your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${msg}</p>
        `,
      });

      return res.status(200).json({
        success: true,
        message: "Your message was sent successfully!",
      });
    } catch (mailError) {
      console.error("Mail Sending Error:", mailError);
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
        error: mailError.message,
      });
    }
  } catch (error) {
    console.error("Send Email API Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default sendEmailController;

