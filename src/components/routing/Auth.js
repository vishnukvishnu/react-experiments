function Auth(){
    let flag = false

    this.login = function(fn){
        flag = true
        fn()
    }

    this.logout = function(){
        flag = false
    }

    this.isAuthenticate = function(){
        return flag
    }
}

export default new Auth()