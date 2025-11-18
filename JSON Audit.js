"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];           
const errorLog = [];            

console.log('\n--- JSON Audit Report ---\n');

for (let i = 0; i < rawData.length; i++) {
    const raw = rawData[i];
    const lineNumber = i + 1; 

  
    try {
        const parsed = JSON.parse(raw);

        if (!parsed.hasOwnProperty('user') || !parsed.hasOwnProperty('age')) {
            throw new Error('Missing required key(s): ' +
                `${!parsed.hasOwnProperty('user') ? 'user ' : ''}` +
                `${!parsed.hasOwnProperty('age') ? 'age' : ''}`);
        }

        const ageNum = Number(parsed.age);
        if (isNaN(ageNum)) {
            throw new Error('Invalid age value — cannot convert to Number');
        }

        const record = {
            user: String(parsed.user),
            age: ageNum,
            originalLine: lineNumber
        };

        cleanData.push(record);
        console.log(`Line ${lineNumber}: Parsed OK → ${record.user}, age ${record.age}`);

    } catch (err) {
        errorLog.push({ line: lineNumber, raw: raw, error: err.message });
        console.log(`Line ${lineNumber}: ERROR → ${err.name || 'Error'}: ${err.message}`);
    }
}

const adults = cleanData.filter(r => r.age >= 18);
const minors = cleanData.filter(r => r.age < 18);

console.log('\n--- Final Clean Data ---');
console.log('Valid entries count:', cleanData.length);
console.log('Clean Data:', cleanData);

console.log('\n--- Error Log ---');
console.log('Errors count:', errorLog.length);
for (let e of errorLog) {
    console.log(`Line ${e.line} → ${e.error} | Raw: ${e.raw}`);
}
console.log('\n--- Age Filter Summary ---');
console.log('Adults (18+) count:', adults.length, adults.map(a => `${a.user}(${a.age})`));
console.log('Minors (<18) count:', minors.length, minors.map(m => `${m.user}(${m.age})`));
