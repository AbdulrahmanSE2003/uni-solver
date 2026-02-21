import CryptoJS from "crypto-js";

const SECRET_KEY =
  process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "fallback-key-safe";

export const encryptData = (text: string) => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decryptData = (ciphertext: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    return "";
  }
};
