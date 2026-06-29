const studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
const marks: number[] = [75, 80, 82];

let updatedMarks: number[] = [];
let total: number = 0;

for (let i = 0; i < marks.length; i++) {
    let newMark = marks[i]! + 10; // <-- Add !
    updatedMarks.push(newMark);
    total += newMark;
}

let average = total / updatedMarks.length;

console.log("Updated Marks:");
for (let i = 0; i < studentNames.length; i++) {
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

console.log(`Average Marks: ${average.toFixed(1)}`);