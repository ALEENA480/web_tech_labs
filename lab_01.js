//Task 1
function addition(a, b) {
  return a + b;
}
console.log("Task 1:", addition(2, 3));

//Task 2
function bitwiseAND(a, b) {
  return a & b;
}
function bitwiseOR(a, b) {
  return a | b;
}
function bitwiseXOR(a, b) {
  return a ^ b;
}
console.log("Task 2:", bitwiseAND(12, 10), bitwiseOR(12, 10), bitwiseXOR(12, 10));

//Task 3
function addUp(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}
console.log("Task 3:", addUp(4));

//Task 4
function progressBar(a) {
  let filled = Math.floor(a / 10);
  filled = Math.max(0, Math.min(10, filled));
  return "#".repeat(filled) + "-".repeat(10 - filled);
}
console.log("Task 4:", progressBar(10), progressBar(49), progressBar(100));

//Task 5
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log("Task 5:", minMax([1, 2, 3, 4, 5, 6]));

const repos = [
  { name: "repo-a", stars: 12 },
  { name: "repo-b", stars: 45 },
  { name: "repo-c", stars: 3 },
];

//Task 6
function calculateRepoStats(repos) {
  const stars = repos.map((repo) => repo.stars);
  const maxStars = Math.max(...stars);
  const minStars = Math.min(...stars);
  const total = stars.reduce((sum, s) => sum + s, 0);
  const avgStars = Math.floor(total / stars.length);
  const varianceScore = Math.abs(maxStars - minStars);
  return { maxStars, minStars, avgStars, varianceScore };
}
console.log("Task 6:", calculateRepoStats(repos));


//Task 7
function round2(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
  const discounted = round2(basePrice * (1 - discountPercentage / 100));
  const tax = round2(discounted * (taxRate / 100)); 
  const finalPrice = round2(discounted + tax);
  const loyaltyPoints = Math.ceil(finalPrice);
  return { finalPrice, loyaltyPoints };
}
console.log("Task 7:", calculateFinalPrice(99.99, 10, 15));
const allProducts = ["Laptop", "Mouse", "Keyboard", "Monitor", "Desk", "Chair", "Webcam", "Headphones"];

//Task 8
function paginateData(items, pageNumber, pageSize = 5) {
  const totalPages = Math.ceil(items.length / pageSize);
  const start = (pageNumber - 1) * pageSize;
  const data = items.slice(start, start + pageSize);
  return {
    data,
    currentPage: pageNumber,
    totalPages,
    hasNext: pageNumber < totalPages,
    hasPrev: pageNumber > 1,
  };
}
console.log("Task 8:", paginateData(allProducts, 2, 3));
