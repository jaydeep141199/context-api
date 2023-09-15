import { AES } from "crypto-js";

export const encryptData = (data, secretKey) => {
  return AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (encryptedData, secretKey) => {
  const bytes = AES.decrypt(encryptedData, secretKey);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
};
