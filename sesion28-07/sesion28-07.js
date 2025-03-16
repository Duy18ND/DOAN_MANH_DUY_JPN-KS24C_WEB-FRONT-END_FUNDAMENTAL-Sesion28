let students = [

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }

];
for (let i in students) {
    let sum = students[i].scores.math + students[i].scores.english + students[i].scores.literature;
    let result = sum / 3;
    if (result >= 8) {
        console.log(students[i].name, result.toFixed(2));
    }
}