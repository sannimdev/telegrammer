import axios from 'axios';
import { LOG_ERROR, LOG_NORMAL, setLog } from './logger';

const TOKEN = process.env.TOKEN;

const getMessageApiUrl = ({ token, chatId, message }) =>
  `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

export const sendMessage = async (chatId, message) => {
  try {
    const url = getMessageApiUrl({ token: TOKEN, chatId, message });
    const result = await axios.get(url);
    setLog(LOG_NORMAL, JSON.stringify(result));
  } catch (error) {
    setLog(LOG_ERROR, error);
  }
};
