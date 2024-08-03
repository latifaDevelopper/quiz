const questionsMysql = [
    {
        numb: 1,
        question: 'What does the SQL query SELECT COUNT(*) FROM table_name; return?',
        answer: 'B. The number of rows in the table',
        options: [
            'A. The number of columns in the table',
            'B. The number of rows in the table',
            'C. The sum of values in a specific column',
            'D. The average value of a specific column'
        ]
    },
    {
        numb: 2,
        question: 'What is the difference between INNER JOIN and LEFT JOIN in MySQL?',
        answer: 'C. INNER JOIN returns only the rows that match the condition in both tables, while LEFT JOIN returns all rows from the left table and matching rows from the right table',
        options: [
            'A. INNER JOIN returns all rows from both tables, while LEFT JOIN returns only the rows that match the condition in both tables',
            'B. INNER JOIN returns all rows from the left table and matching rows from the right table, while LEFT JOIN returns only the rows that match the condition in both tables',
            'C. INNER JOIN returns only the rows that match the condition in both tables, while LEFT JOIN returns all rows from the left table and matching rows from the right table',
            'D. INNER JOIN and LEFT JOIN are synonymous in MySQL'
        ]
    },
    {
        numb: 3,
        question: 'What does the SQL query SELECT DISTINCT column_name FROM table_name; do?',
        answer: 'A. Returns unique values from the specified column in the table',
        options: [
            'A. Returns unique values from the specified column in the table',
            'B. Returns all values from the specified column in the table',
            'C. Returns the sum of values in the specified column',
            'D. Returns the average value of the specified column'
        ]
    },
    {
        numb: 4,
        question: 'What does the SQL query SELECT * FROM table1, table2; do?',
        answer: 'C. Returns the Cartesian product of the two tables',
        options: [
            'A. Returns the union of the two tables',
            'B. Returns the intersection of the two tables',
            'C. Returns the Cartesian product of the two tables',
            'D. Returns the concatenation of the two tables'
        ]
    },
    
    {
        numb: 5,
        question: 'What is the purpose of the SQL GROUP BY clause?',
        answer: 'D. Groups rows that have the same values into summary rows',
        options: [
            'A. Sorts the rows returned by a query',
            'B. Limits the number of rows returned by a query',
            'C. Joins two or more tables together',
            'D. Groups rows that have the same values into summary rows'
        ]
    },
    {
        numb: 6,
        question: 'What is the difference between WHERE and HAVING clauses in SQL?',
        answer: 'B. WHERE is used to filter rows before grouping, while HAVING is used to filter groups after grouping',
        options: [
            'A. WHERE is used to filter groups after grouping, while HAVING is used to filter rows before grouping',
            'B. WHERE is used to filter rows before grouping, while HAVING is used to filter groups after grouping',
            'C. WHERE and HAVING are synonymous in SQL',
            'D. WHERE and HAVING cannot be used together in a query'
        ]
    },
    {
        numb: 7,
        question: 'What does the SQL query UPDATE table_name SET column_name = new_value WHERE condition; do?',
        answer: 'A. Updates existing records in the table that match the specified condition',
        options: [
            'A. Updates existing records in the table that match the specified condition',
            'B. Inserts new records into the table',
            'C. Deletes records from the table that match the specified condition',
            'D. Creates a new table with the specified columns and values'
        ]
    },
    {
        numb: 8,
        question: 'What does the SQL query DELETE FROM table_name WHERE condition; do?',
        answer: 'C. Deletes existing records from the table that match the specified condition',
        options: [
            'A. Updates existing records in the table that match the specified condition',
            'B. Inserts new records into the table',
            'C. Deletes existing records from the table that match the specified condition',
            'D. Creates a new table with the specified columns and values'
        ]
    },
    {
        numb: 9,
        question: 'What does the SQL query ALTER TABLE table_name ADD column_name datatype; do?',
        answer: 'B. Adds a new column to the existing table',
        options: [
            'A. Modifies the data type of an existing column in the table',
            'B. Adds a new column to the existing table',
            'C. Deletes a column from the existing table',
            'D. Renames the existing table'
        ]
    },
    {
        numb: 10,
        question: 'What does the SQL query SELECT * FROM table_name ORDER BY column_name DESC; do?',
        answer: 'A. Returns all rows from the table sorted in descending order based on the specified column',
        options: [
            'A. Returns all rows from the table sorted in descending order based on the specified column',
            'B. Returns all rows from the table sorted in ascending order based on the specified column',
            'C. Returns the highest value from the specified column in the table',
            'D. Returns the lowest value from the specified column in the table'
        ]
    }
];
