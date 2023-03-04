// let nums1=[1,2,3]
// let nums2=[4,5,6]

// console.log(nums1.concat('mumin',nums2))
// console.log([...nums1,'mumin',...nums2])


// shallow copy 

// let nums1=[1,2,3]
// let nums2=[...nums1]
// nums2[0]=10
// console.log(nums1,nums2)


// start String 

// let fname='Abdul'
// let lname='Mumin'

// console.log(`'${fname}' '${lname}'`)


// let fname='Abdul'
// // fname='m'
// // console.log(fname)
// for( let i=fname.length-1;i>=0;i--){
//     console.log(fname[i])
// }


// let fname='Abdul'
// let lname='Abdul'
// // let fname=[1,2,3]
// // let lname=[1,2,3]
// // let lname=fname
// console.log(fname==lname)

// let fname='Abdulmumin'
// console.log(fname.slice(0,5),fname)


// let fname='Abdulmumin'
// console.log(fname.charAt(1))

// let fname='Abdulmumin'
// // console.log(fname.slice(5))
// // console.log(fname.slice(1,6))
// // console.log(fname.substring(1,6))
// console.log(fname.substr(1,6))





// let fname='AbdulMUmin'
// console.log(fname.toLocaleLowerCase())
// console.log(fname.toLocaleUpperCase())


// let fname='       AbdulMUmin'
// console.log(fname)
// console.log(fname.trim())
// console.log(fname.trimStart())
// console.log(fname.trimEnd())



// let fname='abdulaamumin'
// console.log(fname.replace(/a/i,'r'))
// console.log(fname.replace(/a/gi,'r'))

// let news='india won the match.India become the first country to win 10-18 cup'
// console.log(news.replace(/india/i,'Pakistan'))
// console.log(news.replace(/india/gi,'Pakistan'))



// let news='india won the match'
// console.log(news.split('i',2))
// console.log(news.split('won'))
// console.log(news.split(' ').length)



// let news='india won the match.India become the first country to win 10-18 cup'
// let target='india'
// console.log(news.includes('target'))



// let email='abdulmuminbar@gmail.com'
// if(email.endsWith('@gmail.com')){
//     console.log('valid');
// }else{
//     console.log('invalid');
// }



// let mobile='916901527553'
// if(mobile.startsWith('91')){
//     console.log('valid num');
// }else{
//     console.log('invalid num');
// }



// let mobile='916901527553'
// if(mobile.length==12){
//     console.log('valid num');
// }else{
//     console.log('invalid num');
// }


// let mobile=' 916901527553 '
// if(mobile.trim().length==12){
//     console.log('valid num');
// }else{
//     console.log('invalid num');
// }


// if i remove all 5 
// let mobile=' 916901527553 '
// console.log(mobile.replace(/5/g,''));



// let names='mumin is a good is student'
// // console.log(names.match('is'));
// console.log(names.match(/iss/));
// // console.log(names.indexOf('is'));
// // console.log(names.indexOf(/is/));







// anagram or not

// let word1='god'
// let word2='dog'
// if(word1.split('').sort().join('')==word2.split('').sort().join('')){
//     console.log('anagram');
// }else{
//     console.log('not an anagram');
// }





// let word='Sachin Tendulkar'
// let target='a'
// let count=0;
// for(let i=0;i<word.length;i++){
//     if(word[i]== target){
//         count+=1;
//     }
// }
// console.log(count);



// console.log('abdul');
// setTimeout(()=>{
//     console.log('inside');
// },2000)
// setTimeout(()=>{
//     console.log('inside');
// },0)
// console.log('mumin');





// let nums=[1,2,3,4,5]
// let names=['abdul','mumin','rumi']
// for(let name of names){
//     console.log(name);
// }


let arr=5

    console.log(Math.sqrt(arr))

