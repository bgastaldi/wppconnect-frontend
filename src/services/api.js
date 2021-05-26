import axios from "axios";
import {io} from "socket.io-client";

const ip = window.IP_SERVER;
export const socket = io(window.IP_SOCKET_IO);

export function listenerMessages(cb) {
    socket.off("received-message").on("received-message", (message) => {
       return cb(null, message);
    });
}

export const api = axios.create({
    baseURL: ip
});

export default api;
