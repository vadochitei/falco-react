import { Status } from './status'
export class Event {
    status?: string
    name!: string
    email!: string
    phoneNumber?: string | number
    message?: string
    
    constructor(value?: any) {
        this.status = value && value.status || Status.MR
        this.name = value && value.name || ''
        this.email = value && value.email || ''
        this.phoneNumber = value && value.phoneNumber || ''
        this.message = value && value.message || ''
    }
}