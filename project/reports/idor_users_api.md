# Vulnerability: IDOR (Broken Object Level Authorization)

## Application
OWASP Juice Shop (Local)

## API Endpoint
GET /api/Users/{id}

## Vulnerability Type
Broken Object Level Authorization (IDOR)

## Severity
High

## Description
The application allows an authenticated normal user to access other users’ data by directly modifying the user ID in the API endpoint. Proper authorization checks are missing.

## Steps to Reproduce
1. Authenticate as a normal user and obtain a valid Bearer token
2. Send a GET request to `/api/Users`
3. Access another user’s data by requesting `/api/Users/1` or `/api/Users/2`
4. Observe that sensitive user information is returned

## Impact
An attacker can access sensitive data of other users, including administrative accounts, leading to privacy violations and potential privilege escalation.

## Evidence
- Screenshot: `users_api_exposed.png`
- Screenshot: `idor_users_api.png`

## Recommendation
- Enforce object-level authorization checks
- Validate that the authenticated user is allowed to access the requested object
- Implement role-based access control (RBAC)
