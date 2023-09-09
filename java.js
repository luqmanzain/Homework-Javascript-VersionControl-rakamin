// Fungsi untuk menghasilkan 100 nilai acak antara 1 hingga 50 dan menyimpannya dalam satu array
function generateRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  
  // Fungsi untuk memisahkan nilai-nilai pada array menjadi dua array berdasarkan indeksnya (genap dan ganjil)
  function separateArrayByIndex(arr) {
    const evenArray = [];
    const oddArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
  
    return { evenArray, oddArray };
  }
  
  // Fungsi untuk menghitung nilai minimum dari sebuah array
  function findMinValue(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum dari sebuah array
  function findMaxValue(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total dari sebuah array
  function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata dari sebuah array
  function calculateAverage(arr) {
    const total = calculateTotal(arr);
    return total / arr.length;
  }
  
  // Generate array dengan 100 nilai random antara 1 dan 50
  const randomArray = generateRandomArray(100);
  
  // Pisahkan array menjadi array genap dan ganjil
  const { evenArray, oddArray } = separateArrayByIndex(randomArray);
  
  // Hitung min, max, total, dan rata-rata untuk kedua array
  const minEven = findMinValue(evenArray);
  const maxEven = findMaxValue(evenArray);
  const totalEven = calculateTotal(evenArray);
  const averageEven = calculateAverage(evenArray);
  
  const minOdd = findMinValue(oddArray);
  const maxOdd = findMaxValue(oddArray);
  const totalOdd = calculateTotal(oddArray);
  const averageOdd = calculateAverage(oddArray);
  
  // Bandingkan hasil
  const comparison = {
    min: minEven > minOdd ? "Min lebih besar array genap" : "Min lebih besar array ganjil",
    max: maxEven > maxOdd ? "Max lebih besar array genap" : "Max lebih besar array ganjil",
    total: totalEven === totalOdd ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil",
    average: averageEven > averageOdd ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil",
  };
  
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  console.log("Min, Max, Total, Rata-rata pada array genap:");
  console.log("Min:", minEven);
  console.log("Max:", maxEven);
  console.log("Total:", totalEven);
  console.log("Rata-rata:", averageEven);
  console.log("Min, Max, Total, Rata-rata pada array ganjil:");
  console.log("Min:", minOdd);
  console.log("Max:", maxOdd);
  console.log("Total:", totalOdd);
  console.log("Rata-rata:", averageOdd);
  console.log("Perbandingan nilai:");
  console.log("Min:", comparison.min);
  console.log("Max:", comparison.max);
  console.log("Total:", comparison.total);
  console.log("Rata-rata:", comparison.average);
  