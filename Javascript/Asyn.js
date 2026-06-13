//onsole.log(1)
//setTimeout(()=>)

//asynchronous
// function getData(dataId,getNextData){

// setTimeout(()=>{
//     console.log("DataId:"+ dataId)
//     if(getNextData){
//         getNextData()
//     }
// },2000);

// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5,()=>{
//                 })
//             })
//         })
//     })
// })


let promise=new Promise((resolve, reject) => {
    let success=true
    if(success){
        resolve("Resolved")
    }
    else{
        reject("Rejected")
    }
})

function getData(dataId){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data is:"+dataId)
            reject("its not fullfiller")

        },30000)
     })
}

getData(1).then(()=>getData(2)).then(()=>getData(3)).catch((err)=>console.log(err))

async function fetchData() {
    await getData(1)
    await getData(2)
    await getData(3)
    
}
fetchData()


