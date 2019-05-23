import{Injectable} from '@angular/core'

interface user {
kullanici:string,
id:string
}
export class Userservice
{

    private user:user

    constructor(){

    }

    setUser(user:user){
        this.user=user
    }

    getUID(){
        return this.user.id
        
}

}