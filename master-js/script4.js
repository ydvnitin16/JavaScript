// Find the longest substring without repeating characters

let str = "abcabcbbdfghjklmn";

function longestSubStrWithoutRepeatingChar(str) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        set.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return str.split("").splice(left, maxLength).join("");
}

console.log(longestSubStrWithoutRepeatingChar(str));

// Implement a memoize() utility function

function memoizeFn(fn) {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(...args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        const value = fn(...args);
        cache.set(key, value);
        return value;
    };
}

const sum = (a, b) => a + b;

const memoizedSum = memoizeFn(sum);

memoizedSum(1, 2);
memoizedSum(3, 5);
memoizedSum(1, 2);

const employeeDept = {
    company: "Tech Corp",
    departments: [
        {
            deptName: "Engineering",
            location: "NY",
            employees: [
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
            ],
        },
        {
            deptName: "Sales",
            location: "SF",
            employees: [{ id: 3, name: "Charlie" }],
        },
    ],
};

function flattenAndGroupEmployees(obj) {
    const employeesWithDept = [];
    obj.departments.forEach((department) => {
        const commonFields = {
            deptName: department.deptName,
            location: department.location,
        };

        employeesWithDept.push(
            ...department.employees.map((emp) => {
                return { ...commonFields, ...emp };
            }),
        );
    });
    return employeesWithDept;
}

console.log(flattenAndGroupEmployees(employeeDept));



