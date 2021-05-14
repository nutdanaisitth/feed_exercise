import { observable, action } from 'mobx'


export interface ILoginStore {
    access_token: string
}

export default class LoginStore implements ILoginStore {
    @observable access_token = ''
    
   
}


