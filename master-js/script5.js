// Find the second largest number in an array without sorting

function secondLargeNum(arr) {
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// const arr = [5, 5, 3, 5];
// console.log(secondLargeNum(arr));

// Convert a flat list of categories with parentId into a nested tree

// function flatList(arr) {
//     const result = [];
//     for (const category of arr) {
//         if (category.parentId === null) {
//             const updatedCate = { ...category, children: [] };
//             delete updatedCate.parentId;

//             result.push(updatedCate);
//             continue;
//         }

//         if (category.parentId) {
//             const index = Number(
//                 result.findIndex((r) => r.id === category.parentId),
//             );
//             const indexVal = result[index];

//             if (index >= 0) {
//                 const updatedCate = { ...category, children: [] };
//                 delete updatedCate.parentId;

//                 indexVal?.children.push(updatedCate);
//             }
//             continue;
//         }
//     }
//     return result;
// }

// const arr = [
//     { id: 1, name: "Electronics", parentId: null },
//     { id: 2, name: "Mobiles", parentId: 1 },
//     { id: 3, name: "Laptops", parentId: 1 },
//     { id: 4, name: "iPhone", parentId: 2 },
//     { id: 5, name: "Gaming Laptop", parentId: 3 },
//     { id: 6, name: "Home Appliances", parentId: null },
//     { id: 7, name: "Television", parentId: 6 },
// ];

// function flatList(arr) {
//     const result = [];
//     let categoryByIdMap = new Map(
//         arr.map((a) => {
//             a.children = [];
//             return [a.id, a];
//         }),
//     );

//     // {
//     // '1' : { id: 1, name: "Electronics", parentId: null, children: [{ id: 2, name: "Mobiles", parentId: 1, children: [{ id: 4, name: "iPhone", parentId: 2, children: []] }, id: 3, name: "Laptops", parentId: 1, children: [id: 5, name: "Gaming Laptop", parentId: 3, children: []]] },
//     // '2' : { id: 2, name: "Mobiles", parentId: 1, children: [{ id: 4, name: "iPhone", parentId: 2, children: []] }
//     // '3' : { id: 3, name: "Laptops", parentId: 1, children: [id: 5, name: "Gaming Laptop", parentId: 3, children: []]  },
//     // '4' : { id: 4, name: "iPhone", parentId: 2, children: []  },
//     // '5' : { id: 5, name: "Gaming Laptop", parentId: 3, children: []  },
//     // }

//     // explanation:
//     // everthing is working on a shallow copy because of actual object is in the memory the reference is stored here so as we update one object the other automatically gets updated

//     for (let a of arr) {
//         if (a.parentId !== null) {
//             const parentCategory = categoryByIdMap.get(a.parentId);
//             if (parentCategory) {
//                 parentCategory.children.push(a);
//             }
//         } else {
//             result.push(a);
//         }
//     }

//     return { result, arr };
// }
// console.log(flatList(arr));

const promise = async (text, delay) => {
    console.log('called')
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(text);
        }, delay);
    });
};

async function testAsyncAwaitChain() {
    const promise1 = await promise("First promise", 2000);
    const promise2 = await promise(promise1, 3000);
    const promise3 = await promise(promise2, 3000);
    console.log(promise1, promise2, promise3);
}

testAsyncAwaitChain()