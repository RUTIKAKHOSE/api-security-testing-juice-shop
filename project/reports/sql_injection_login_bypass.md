# Vulnerability: SQL Injection – Authentication Bypass

## Application
OWASP Juice Shop (Local)

## API Endpoint
POST /rest/user/login

## Vulnerability Type
SQL Injection (Authentication Bypass)

## Severity
High

## Description
The login API endpoint is vulnerable to SQL injection, allowing an attacker to bypass authentication without valid credentials.

## Payload Used
```json
{
  "email": "' OR 1=1--",
  "password": "anything"
}
Steps to Reproduce

Send a POST request to /rest/user/login

Use the above SQL injection payload in the request body

Observe successful authentication without valid credentials

Impact

An attacker can gain unauthorized access, including administrative access, without knowing valid user credentials.

Evidence

Screenshot: login_sqli_bypass.png

Screenshot: postman_login_success.png

Recommendation

Use parameterized queries

Validate and sanitize user inputs

Implement proper authentication controls
