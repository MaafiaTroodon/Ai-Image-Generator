const students = [
    { name: "Alice", grades: [89, 79, 94, 90] },
    { name: "Pedro", grades: [77, 81, 89, 82] },
    { name: "Jeff", grades: [73, 71, 85, 76] },
    { name: "Laura", grades: [80, 63, 78] },
    { name: "Mike", grades: [90, 87, 92,82] },
    { name: "Sophia", grades: [88, 95, 80, 85] },
    { name: "Emma", grades: [75, 70, 80, 72] },
    { name: "Liam", grades: [82, 78, 88] }
];

function calculateAverage(grades) {
    if (grades.length === 0) return 0;
    return Math.round(grades.reduce((sum, grade) => sum + grade, 0) / grades.length);
}

function getLetterGrade(avg) {
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    return "F";
}

function populateTable() {
    const tableBody = document.getElementById("grade-table-body");
    students.forEach(student => {
        const avgGrade = calculateAverage(student.grades);
        const letterGrade = getLetterGrade(avgGrade);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            ${Array.from({ length: 4 }, (_, i) => `<td>${student.grades[i] || "-"}</td>`).join("")}
            <td>${avgGrade}</td>
            <td>${letterGrade}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", populateTable);