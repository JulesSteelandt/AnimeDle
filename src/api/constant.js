import axios from 'axios';
import info from './token.js';

// 43608

export const api  = axios.create({
    baseURL: info.url,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${info.token}`,

    },
}); 