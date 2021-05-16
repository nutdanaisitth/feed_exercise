import { observable, action } from 'mobx'


export interface IResponseStore {
    success: boolean
    setSuccess(): void
    clearResponses() : void
}

export default class ResponseStore implements IResponseStore {
    @observable success = false
    

    @action setSuccess() {
        this.success = true
    }

    @action clearResponses() {
        this.success = false
    }

   
}