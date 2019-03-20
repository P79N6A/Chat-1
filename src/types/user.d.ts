export interface User {
    account: string,
    nickname: string,
    password: string,
    age: number,
    sex: 0 | 1,
    email: string,
    introduction: string
}

export interface Message {
    sender: string,
    receiver: string,
    content: string,
    date: Date,
    status: 0 | 1, //未读，已读
}