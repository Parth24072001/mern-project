import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmailVerification = (createdUser) => {
  const verificationLink = `${process.env.APIURL}/users/verify?email=${createdUser?.email}}`;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: createdUser.email,
    subject: "Registration Confirmation",
    text: `Hello ${createdUser.fullName},\n\nThank you for registering with us! Your account has been successfully created. Please click on the following link to verify your email: ${verificationLink}`,
    html: `<p>Hello ${createdUser.fullName},</p><p>Thank you for registering with us! Your account has been successfully created. Please click <a href="${verificationLink}">here</a> to verify your email.</p>`,
  };

  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.log("Error " + err);
    } else {
    }
  });
};
export const sendEmailToMarchant = (to, data) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Verify your Email Account",

    text: data?.phone,

    // data: data,
  };
  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.log("Error " + err);
    }
  });
};
