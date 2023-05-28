// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];
// let sum=0;
// arr.forEach((item)=>sum=sum+item.age)
// console.log(arr)
// console.log(sum)

// let developers_array = [
//     {
//       first: "John",
//       last: "Doe",
//       dept: "FE",
//       commits: 10
//     },
//     {
//       first: "Jane",
//       last: "Doe",
//       dept: "BE",
//       commits: 15
//     },
//     {
//       first: "James",
//       last: "bond",
//       dept: "BE",
//       commits: 8
//     }
//   ];
//   let newarr=developers_array.reduce((prev,curr)=>{

//     if(curr.dept=="FE"){
//       prev.FE.push(curr.first)
//     }else{
//         prev.BE.push(curr.first)
//     }

//     return prev
//     },{BE:[],FE:[]})

//     console.log(newarr)

//     let reduced_array = developers_array.reduce(
//   function (accumulator, item) {
//     item.dept === "BE"
//       ? accumulator.BE.push(item.first)
//       : accumulator.FE.push(item.first);
//     return accumulator;
//   },
//   { BE: [], FE: [] }
// );

// console.log(reduced_array)

//   { BE: [James, Jane], FE: [John] }

//   let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];

//   const groupById=(users)=>{
//     let newarr=users.reduce((prev,curr)=>{

//       if(curr.id=="john"){
// //console.log(curr.name,"line71")
//         prev.john.id=curr.id,
//             prev.john.name=curr.name,
//               prev.john.age=curr.age

//       }else if(curr.id=="ann"){
//       //  console.log(curr.name,"line77")
//           prev.ann.id=curr.id,
//            prev.ann.name=curr.name,
//               prev.ann.age=curr.age

//       }else if(curr.id=="pete"){
//         //console.log(curr.name,"line84")
//         prev.pete={
//             id:curr.id,
//             name:curr.name,
//             age:curr.age
//         }

//       }

//       return prev
//     },{john:{},ann:{},pete:{}})

//    // console.log(newarr,"line 51")

//     return newarr

//   }

//   let usersById = groupById(users);

//   console.log(usersById)

// let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];

//   // [16, 20, 23, 30]

//   let newarr=users.reduce((prev,curr)=>{
// prev.push(curr.age)
// return prev
//   },[])

//   console.log(newarr)

// let data = [
//     { name: "John", subject: "Javascript" },
//     { name: "John", subject: "HTML" },
//     { name: "John", subject: "CSS" },
//     { name: "Pete", subject: "Java" },
//     { name: "Pete", subject: "English" },
//     { name: "Pete", subject: "Maths" },
//     { name: "Mary", subject: "Rust" },
//     { name: "Mary", subject: "Elm" },
//   ]

// let newarr=data.reduce((prev,curr)=>{

// if(curr.name==="John"){
//     prev.John.push(curr.subject)
// }else if(curr.name=="Pete"){
//     prev.Pete.push(curr.subject)
// }else{
//     prev.Mary.push(curr.subject)
// }

// return prev

// },{John:[],Pete:[],Mary:[]})

// console.log(newarr)

//   Expected output:
//   {
//     John: ["Javascript", "HTML", "CSS"],
//     Pete: ["Java", "English", "Maths"],
//     Mary: ["Rust", "Elm"]
//   }

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.reduce((prev,curr)=>{

// prev.push({
//     fullName:curr.name+" "+curr.surname,
//     id:curr.id
// })
// return prev

// },[])

// console.log(usersMapped)

/* 
end result/sample output: 
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// function getGreeting(firstName, lastName) {
//   return `Hi from ${firstName} ${lastName}.`;
// }

//   let john = { name: "John", surname: "Smith", id: 1 };
//   let pete = { name: "Pete", surname: "Hunt", id: 2 };
//   let mary = { name: "Mary", surname: "Key", id: 3 };

//   let users = [ john, pete, mary ];

//   let usersGreetings = users.reduce((prev,curr)=>{
// prev.push(getGreeting(curr.name,curr.surname))
// return prev
//   },[])

//   console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]
// let subjectsHash = {
//     1: 'Javascript',
//     2: 'HTML',
//     3: 'CSS',
//     4: 'Java',
//     5: 'Rust',
//   }

//   let students = [
//     {id: 1, name: 'Prateek', subjectID: 5},
//     {id: 2, name: 'Yogesh', subjectID: 2},
//     {id: 3, name: 'Nrupul', subjectID: 4},
//     {id: 4, name: 'Prateek', subjectID: 1},
//   ]

//   let newObj = students.reduce((prev,curr)=>{
// if(curr.name==="Prateek"){
// //console.log(curr.name,"line 228")
//     for(let key in subjectsHash){
//         if(curr.subjectID===+key){
//             prev.Prateek.push(subjectsHash[key])
//         }
//     }

// }else if(curr.name==="Yogesh"){
//     for(let key in subjectsHash){
//         if(curr.subjectID===+key){
//             prev.Yogesh.push(subjectsHash[key])
//         }
//     }
// }else{
//     for(let key in subjectsHash){
//         if(curr.subjectID===+key){
//             prev.Nrupul.push(subjectsHash[key])
//         }
//     }
// }

// return prev

//   },{Prateek:[],Yogesh:[],Nrupul:[]})

//   console.log(newObj);

/* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsHash` object.
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */

//   let subjectsData = [
//     {id: 1, name: 'Javascript'},
//     {id: 2, name: 'HTML'},
//     {id: 3, name: 'CSS'},
//     {id: 4, name: 'Java'},
//     {id: 5, name: 'Rust'},
//   ]

//   // code your key-value object for subjects here

//   let students = [
//     {id: 1, name: 'Prateek', subjectID: 5},
//     {id: 2, name: 'Yogesh', subjectID: 2},
//     {id: 3, name: 'Nrupul', subjectID: 4},
//     {id: 4, name: 'Prateek', subjectID: 1},
//   ]

//   let newObj = students.reduce((prev,curr)=>{

// if(curr.name==="Prateek"){
//     subjectsData.forEach((item)=>{
//         if(curr.subjectID===item.id){
//             prev.Prateek.push(item.name)
//         }
//     })
// }else if(curr.name==="Nrupul"){
//     subjectsData.forEach((item)=>{
//         if(curr.subjectID===item.id){
//             prev.Nrupul.push(item.name)
//         }
//     })
// }else{
//     subjectsData.forEach((item)=>{
//         if(curr.subjectID===item.id){
//             prev.Yogesh.push(item.name)
//         }
//     })
// }
// return prev

//   },{Prateek:[],Yogesh:[],Nrupul:[]})
//   console.log(newObj);

/* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsData` array.
  
  Hint: consider creating an extra key-value object for quickly accessing subject names
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */

//   let prateekMarksData = {
//     name: "Prateek",
//     subject1: "Javascript",
//     subject2: "HTML",
//     subject3: "CSS",
//     subject4: null,
//     subject5: null,
//     marks1: 90,
//     marks2: 81,
//     marks3: 80,
//     marks4: null,
//     marks5: null,
//   }

//   let nrupulMarksData = {
//     name: "Nrupul",
//     subject1: "Java",
//     subject2: "Pyton",
//     subject3: null,
//     subject4: null,
//     subject5: null,
//     marks1: 95,
//     marks2: 85,
//     marks3: null,
//     marks4: null,
//     marks5: null,
//   }

//   let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

//   let massagedData = allStudentsMarksData.reduce((prev, curr)=>{

//   let marks=[]

// if(curr.subject1 && curr.marks1){
//     marks.push({
//         subject:curr.subject1,
//         score:curr.marks1
//     })
// }
//  if(curr.subject2 && curr.marks2){
//     marks.push({
//         subject:curr.subject2,
//         score:curr.marks2
//     })
// }if(curr.subject3 && curr.marks3){
//     marks.push({
//         subject:curr.subject3,
//         score:curr.marks3
//     })
// } if(curr.subject4 && curr.marks4){
//     marks.push({
//         subject:curr.subject4,
//         score:curr.marks4
//     })
// } if(curr.subject5 && curr.marks5){
//     marks.push({
//         subject:curr.subject5,
//         score:curr.marks5
//     })
// }

// prev.push({
//     name:curr.name,
//     marks:marks
//     })
// //console.log(marks)
// // if(curr.subject1 && curr.marks1){
// //     marks.push({
// //         subject:curr.subject1,
// //         score:curr.marks1
// //     })
// // }else if(curr.subject2 && curr.marks2){
// //     marks.push({
// //         subject:curr.subject2,
// //         score:curr.marks2
// //     })
// // }else if(curr.subject3 && curr.marks3){
// //     marks.push({
// //         subject:curr.subject3,
// //         score:curr.marks3
// //     })
// // }else if(curr.subject4 && curr.marks4){
// //     marks.push({
// //         subject:curr.subject4,
// //         score:curr.marks4
// //     })
// // }else if(curr.subject5 && curr.marks5){
// //     marks.push({
// //         subject:curr.subject5,
// //         score:curr.marks5
// //     })
// // }
// return prev

//   },[])

//   console.log(massagedData);

/*

  
    Expected output from `massagedData`
  
    [
       {
         name: "Prateek", 
         marks: [
           {subject: 'Javascript', score: 90},
           {subject: 'HTML', score: 81},
           {subject: 'CSS', score: 80}
         ]
       },
       {
         name: "Nrupul", 
         marks: [
           {subject: 'Java', score: 95},
           {subject: 'Python', score: 85}
         ]
       },
  
    ]

       ------------------------------------------------
   massage the `allStudentsMarksData` to get a new 
   array called `massagedData`
  
   Instead of separate enties for 5 subjects and their marks,
   in the new array, we just have one entry called marks. 
   marks is an array of objects. the objects of marks
   contains subject and score.
   ------------------------------------------------
  
  */












//    const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//   ];

//   let sum=wishlist.reduce((prev,curr)=>{
// return prev+curr.price
//   },0)
// // Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once: 227005
//   console.log(sum)

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//   ];
  
// let newarr=voters.reduce((prev,curr)=>{
// if(curr.age<=29 && curr.voted ){
//     prev.numYoungVotes++
// }else if(curr.age>=30 && curr.age<=40 && curr.voted){

//     prev.numMidVotesPeople++
// }else if(curr.age>=40 && curr.voted){
//     prev.numOldVotesPeople++
// }

// if(curr.age<=29){
//     prev.numYoungPeople++
// }else if( curr.age>=30 && curr.age<=40){

//     prev.numMidsPeople++
// }else if(curr.age>=41) {
//     prev.numOldsPeople++
// }
// return prev

// },{numYoungVotes:0,numYoungPeople:0,numMidVotesPeople:0,numMidsPeople:0,numOldVotesPeople:0,numOldsPeople:0})

// console.log(newarr)
  /*
  { numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotesPeople: 3,
    numMidsPeople: 4,
    numOldVotesPeople: 3,
    numOldsPeople: 4
  }
  */













//   const data = [
//     { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
//     { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
//     { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
//     { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
//     { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
//     { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
//   ];
  

//   let newarr=data.reduce((prev,curr)=>{
// curr.favoriteIceCreams.forEach((item)=>{
//     if(item==="Strawberry"){
//         prev.Strawberry++
//     }else if(item==="Vanilla"){
//         prev.Vanilla++
//     }else if(item==="Chocolate"){
//     prev.Chocolate++
//     }else if(item=="Cookies & Cream"){
//          prev["Cookies & Cream"]++
//     }else if(item==="Mint Chocolate Chip"){
//     prev["Mint Chocolate Chip"]++
//     }else if(item==="Rocky Road"){
//       prev["Rocky Road"]++
//     }else if(item==="Pistachio"){
//       prev["Pistachio"]++;
//     }else if(item==="Banana"){
//       prev.Banana++
//     }else if(item==="French Vanilla"){
//       prev["French Vanilla"]++
//     }else if(item==="Vanilla Bean"){
//       prev["Vanilla Bean"]++
//     }
// })


// return prev
//   },
//   {
//     Strawberry: 0,
//     Vanilla: 0,
//     Chocolate: 0,
//     'Cookies & Cream': 0,
//     'Mint Chocolate Chip': 0,
//     'Rocky Road': 0,
//     Pistachio: 0,
//     Banana: 0,
//     'French Vanilla': 0,
//     'Vanilla Bean': 0
//   })
// console.log(newarr)
  /*
  {
    Strawberry: 3,
    Vanilla: 4,
    Chocolate: 5,
    'Cookies & Cream': 2,
    'Mint Chocolate Chip': 3,
    'Rocky Road': 1,
    Pistachio: 1,
    Banana: 1,
    'French Vanilla': 1,
    'Vanilla Bean': 1
  }
  */