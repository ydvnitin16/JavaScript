// SLEEP FOR A DELAY

// const sleep = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Time completed");
//         }, ms);
//     });
// };

// async function showMessage(msg) {
//     await sleep(3000);
//     console.log(msg);
// }
// showMessage("Hello");

// Execute promises sequentially (not parallel)

// async function runSequential(ListOfTasks) {
//     const result = [];

//     for (let task of ListOfTasks) {
//         const taskResult = await task();
//         console.log("Task started");
//         result.push(taskResult);
//     }
//     return result;
// }

// const tasks = [
//     () => new Promise((res) => setTimeout(() => res("Task 1 done"), 1000)),
//     () => new Promise((res) => setTimeout(() => res("Task 2 done"), 2000)),
//     () => new Promise((res) => setTimeout(() => res("Task 3 done"), 1500)),
// ];

// runSequential(tasks).then((res) => {
//     console.log("Results:", res);
// });

// IMPLEMENT YOU OWN Promise.all

// async function ownPromiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         if (promises.length === 0) {
//             resolve([]);
//             return;
//         }
//         const result = [];
//         let completedCount = 0;

//         promises.forEach((task, index) => {
//             console.log("Executing promise: ", index);
//             Promise.resolve(task)
//                 .then((taskResult) => {
//                     console.log("Executed:", index);
//                     result[index] = taskResult;
//                     completedCount++;

//                     if (completedCount === promises.length) {
//                         resolve(result);
//                     }
//                 })
//                 .catch((err) => reject(err));
//         });
//     });
// }

// const p1 = new Promise(res => setTimeout(() => res("A"), 1000));
// const p2 = new Promise(res => setTimeout(() => res("B"), 2000));
// const p3 = new Promise((_, rej) => setTimeout(() => rej("Error"), 1500));

// ownPromiseAll([p1, p2])
//     .then(console.log)   // ["A", "B"]
//     .catch(console.error);

// Implement Promise.race (return only first resolved promise leave rest of promises)

// async function ownPromiseRace(promises) {
//     return new Promise((resolve, reject) => {
//         if (promises.length === 0) return;

//         promises.forEach((task) => {
//             Promise.resolve(task).then(resolve).catch(reject);
//         });
//     });
// }

// const p1 = new Promise((res) => setTimeout(() => res("A"), 1000));
// const p2 = new Promise((res) => setTimeout(() => res("B"), 2000));
// const p3 = new Promise((_, rej) => setTimeout(() => rej("Error"), 1500));

// ownPromiseRace([p1, p2])
//     .then(console.log) // ["A", "B"]
//     .catch(console.error);

// Retry a failed API call 3 times

async function retryApi(promise, retries = 3) {
    let lastError;
    for (let i = 0; i < retries; i++) {
        try {
            const result = await promise();
            return result;
        } catch (err) {
            lastError = err;
            console.log(`Failed ${i + 1} attempt`);
        }
    }
    throw lastError;
}
const fakeApi = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.7;

        setTimeout(() => {
            if (success) resolve("Data fetched");
            else reject("API failed");
        }, 500);
    });
};
console.log(retryApi(fakeApi, 3));
