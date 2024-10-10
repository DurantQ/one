import axios from "axios";

export const AuthorizationCode = async (username, password) => {
    const urlEncodedData = new URLSearchParams({
        username,
        password,
        grant_type: 'password',
        client_id:
            '20f986ff4c5c3a95353bc7fcdb5791c680ef70e4f977908a60dd9632ea3342fa',
        client_secret:
            '8b732afcfe1501dd01654f1ed1f0c30655b6625f6e90410b8b94b99d0806f023',
        scope: 'projects pull_requests issues notes  hook groups gists enterprises'
    }).toString()

    return await (axios.post('https://gitee.com/oauth/token', urlEncodedData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }))
}

export const CreateRepository = async () => {
    
}