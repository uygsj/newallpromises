function createPost(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },1000)
        })
    }

const user = {
    username: 'yash',
    lastactivitytime: '13th of jan'
}

function updatelastactivitytime(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            user.lastactivitytime = new Date().getTime();
            resolve()
        }, 1000)
        })
    }

function userupdatepost(){
    Promise.all([createPost(), updatelastactivitytime()])
    .then(([createPostresolves, updatelastactivitytimeresolves])=>{

    })
    .catch(err => console.log(err))
    console.log('Post created')
    console.log('updatelastactivitytime()')
}
userupdatepost()

