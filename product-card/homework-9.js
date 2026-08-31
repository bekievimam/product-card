const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter(number => number >= 5);

console.log(newNumbers);

const fruits = ['apple', 'peach', 'watermelon', 'cherry', 'banana'];
const fruit = 'stawberry';
const hasFruit = fruits.includes(fruit);

console.log(hasFruit);

function reverseArray(array) {
  return array.reverse();
}

console.log(reverseArray(numbers));
console.log(reverseArray(fruits));

import { comments } from "./comment.js";

const comEmailComments = comments.filter(comment => comment.email.includes(".com"))

console.log(comEmailComments);

const updatedComments = comments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});

console.log(updatedComments); 

const commentsWithIdAndName = comments.map(comment => { 
  return {
  id: comment.id, 
  name: comment.name
  }
})

console.log(commentsWithIdAndName)


const commentsWithValidation = comments.map(comment => {
  return {
    ...comment, 
    isInvalid: comment.body.length > 180
  }
 })

console.log(commentsWithValidation);

const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsReduce);

const emailsMap = comments.map(comment => {
  return comment.email;
});

console.log(emailsMap);

const emailsString = emailsMap.toString();

console.log(emailsString);

const emailsJoined = emailsMap.join(", ");

console.log(emailsJoined);