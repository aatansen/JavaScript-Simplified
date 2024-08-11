// Normal promise fetch 
const URL="https://jsonplaceholder.typicode.com/users"
fetch(URL).then(response=>{
    // console.log(response);
    return response.json()
}).then(data=>{
    data.map(name=>{
        console.log(name.username);
    })
})

// Async await fetch
async function dothing(){
    try{
        const response = await fetch(URL)
        console.log(response.ok);
        if(response.ok){
            const data=await response.json()
            data.forEach(name=>{
                console.log(name.username);
            })
        }else{
            console.log("Failure");
            
        }
    }catch(e){
        console.error(e);
        
    }
    
}
dothing()

// fetch post
const URL2="https://jsonplaceholder.typicode.com/posts"
async function dothing2(){
    const response = await fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:"New post"
        })
    })
    const post=await response.json()
    console.log(post);
}
dothing2()

// Exercise get all comment in post id 1 
const URL3="https://jsonplaceholder.typicode.com/comments?postId=1"

// with normal promise fetch 
fetch(URL3).then(response=>{
    return response.json()
}).then(data=>{
    console.log(data);
    
})

// with async fetch
async function getComments() {
    const response=await fetch(URL3)
    const comments = await response.json()
    console.log(comments);
}
getComments()