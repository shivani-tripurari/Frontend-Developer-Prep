//discussed forEach in iterators.js

const arr = ["Ironman", "Hulk", "Thor", "Captain America", "Black Widow", "Loki", "Wanda-Vision"];
const nums = [1,2,3,4,5,6,7];
const books = [
    { 
        title: 'Book One', 
        genre: 'Fiction', 
        publish: 1981, 
        edition: 2004
    },
    { 
        title: 'Book Two', 
        genre: 'Non-Fiction', 
        publish: 1992, 
        edition: 2008 
    },
    { 
        title: 'Book Three', 
        genre: 'History', 
        publish: 1999, 
        edition: 2007 
    },
    { 
        title: 'Book Four', 
        genre: 'Non-Fiction', 
        publish: 1989, 
        edition: 2010 
    },
    { 
        title: 'Book Five', 
        genre: 'Science', 
        publish: 2009, 
        edition: 2014 
    },
    { 
        title: 'Book Six', 
        genre: 'Fiction', 
        publish: 1987, 
        edition: 2010 
    },
    { 
        title: 'Book Seven', 
        genre: 'History', 
        publish: 1986, 
        edition: 1996 
    },
    { 
        title: 'Book Eight', 
        genre: 'Science', 
        publish: 2011, 
        edition: 2016 
    },
    { 
        title: 'Book Nine', 
        genre: 'Non-Fiction', 
        publish: 1981, 
        edition: 1989 
    },
  ];

// 1. filter: ---> uses call back functions similar to for-each but, here we can return something unlike for-each

const answer = arr.filter((hero)=>{
   return hero.length>4;             // {}--->creates a scope, hence it is explicitly returned i.e, we need to use return
})                                      //whereas, in case of implicitly retrned functions i.e, () or single line ---> no need of return keyword
console.log(answer)


//same example using for-each

const ans = [];
arr.forEach((hero)=>{
    if(hero.length>4){
        ans.push(hero);
    }
})
console.log(ans);


//practicing filter on the books array of objects.

const result = books.filter((book)=>{
    // if(book.genre==="History"){
    //     return book;
    // }

    // if(book.publish>=2000){
    //     return book;
    // }

    if(book.genre==="History" && book.publish>=1995){
        return book;
    }
});
console.log(result);


//2. map:

const newNums = nums.map((num)=>{
    num=num+10;
    return num;
})
console.log(newNums);

//same using for-each: ---> the main difference is in for-each we can't return anything
const altArr = []
const alt = nums.forEach((num)=>{
     num=num+10;
     altArr.push(num);
})
console.log(altArr);

