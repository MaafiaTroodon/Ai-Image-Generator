# Lecture 10 Regular Expressions Activity

Name: Malhar Mahajan
NetId: B00934337
Last Modification: 15 FEB 2025
URL: https://web.cs.dal.ca/~mdmahajan/csci3172/activities/lecture10/
GitLab URL: https://git.cs.dal.ca/mdmahajan/csci3172

## Regular Expressions for Input Validation

### First Name
Regular Expression:
```regex
^[A-Za-z]+(\s[A-Za-z]+)?$
```
**Explanation:**
- Allows for letters (case-insensitive).
- Optional space for middle name.

### Last Name
Regular Expression:
```regex
^[A-Za-z]+(['-][A-Za-z]+)*$
```
**Explanation:**
- Allows for letters (case-insensitive).
- Supports apostrophes (e.g., O'Brien) and hyphens (e.g., Smith-Burns).

### Email
Regular Expression:
```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$
```
**Explanation:**
- Standard email format: username@domain.extension.
- Supports 2-6 character TLDs (e.g., .uk, .com, .museum).

### Password
Regular Expression:
```regex
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,}$
```
**Explanation:**
- At least 12 characters.
- Must contain:
  - One uppercase letter.
  - One lowercase letter.
  - One number.
  - One special character.

## Test Cases

### First Name
- **Passed:** Maria, maria, maRia, Maria Gabriella, maria Gabriella, Maria gabriella

### Last Name
- **Passed:** Smith, smith, smith-burns, Smith-Burns, smith-Burns, O'Brien, o'Brien, O'brien, o'brien

### Email
- **Passed:** someone@somewhere.com, Someone-someone@somewhere.com, someone.someone@somewhere.com, someone@somewhere.co, Someone-someone@somwewhere.info, someone.someone@somewhere-somewhere.info
- **Failed:** Someone-someone@somwewhere.somewhere.inform (TLD too long)

### Password
- **Passed:** aB@3bc_e-uxE, aB@3bc_ex-U!, aB@3bc_!5-Ux, 2aB#n!3ha-b4

## Reflection

Using Regexr was extremely helpful in quickly iterating and testing my regular expressions. The visual feedback allowed me to see which parts of my pattern matched the input, making debugging straightforward. One challenge was handling edge cases, especially in the Last Name regex. Overall, this activity deepened my understanding of regex patterns and how they can be used for robust input validation.

## AI and External Resources

No AI tools or external resources were used in completing this assignment. The work was completed solely based on lecture materials and personal understanding.





