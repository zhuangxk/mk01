import JsonP from 'jsonp'
export default class Axios {
    static jsonp(options){
        return new Promise((resolve, reject)=>{
            JsonP(options.url,(err,response)=>{
                if(err) reject(err)
                if(response.status === "success"){
                    resolve(response.results)
                } else {
                    reject(response.message)
                }
            })
        })
    }
}