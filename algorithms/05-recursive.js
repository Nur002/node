const family = {
    mother: "Aigul",
    father: "Asan",
    children: [
        {
            mother: "Aijanat",
            father: "Aibek",
            children: [
                {
                    mother: "Aigerim",
                    father: "Alym",
                    children:[

                    ]
                }]
        }
    ]
}

const familyLog = (family) => {
    console.log(family.mother, family.father)
    family.children.forEach((item) => {
        familyLog(item)
    });
}

console.log(familyLog);