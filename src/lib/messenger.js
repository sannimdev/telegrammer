require('dotenv').config();
import axios from 'axios';
import { LOG_ERROR, LOG_NORMAL, setLog } from './logger';

const TOKEN = process.env.TOKEN;

const getMessageApiUrl = ({ token, chatId, message }) =>
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

export const sendMessage = async (chatId, message) => {
    try {
        const url = getMessageApiUrl({ token: TOKEN, chatId, message: encodeURI(message) });
        const { data } = await axios.get(url);
        data && (await setLog(LOG_NORMAL, data));
        return data;
    } catch (error) {
        console.error(error);
        setLog(LOG_ERROR, error);
    }
};
