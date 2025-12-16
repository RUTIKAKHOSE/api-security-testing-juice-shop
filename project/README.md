#  API Security Testing Project – OWASP Juice Shop

##  Project Overview
This project demonstrates **API security testing** performed on **OWASP Juice Shop**, a deliberately vulnerable application.  
The objective was to identify, exploit, and document common **OWASP API Top 10 vulnerabilities** using real-world tools and techniques.


## Testing Environment
- OS: Kali Linux (VMware Workstation)
- Target Application: OWASP Juice Shop
- Server: http://localhost:3000
- Authentication: JWT (Bearer Token)



## Tools Used
- Postman – Manual API testing
- Burp Suite (Community Edition) – Interception & analysis
- curl – Direct API exploitation
- OWASP Juice Shop – Vulnerable API application


---

## Vulnerabilities Identified

### SQL Injection – Login Bypass
- **Endpoint:** `/rest/user/login`
- **Description:** Improper input validation allows SQL injection during authentication.
- **Impact:** Authentication bypass and unauthorized JWT token generation.
- **OWASP API Category:** API8 – Injection

---

### Broken Object Level Authorization (IDOR)
- **Endpoint:** `/api/Users/{id}`
- **Description:** Object IDs can be manipulated to access other users’ data.
- **Impact:** Exposure of sensitive user information, including admin account details.
- **OWASP API Category:** API1 – Broken Object Level Authorization

---

### Excessive Data Exposure
- **Endpoint:** `/api/Products`
- **Description:** API returns unnecessary internal fields.
- **Impact:** Information disclosure and increased attack surface.
- **OWASP API Category:** API3 – Excessive Data Exposure

---

## Proof of Exploitation (Example)

```bash
curl -i -H "Authorization: Bearer <VALID_JWT_TOKEN>" \
http://localhost:3000/api/Users/1

## Result:
Successfully retrieved admin user details while authenticated as a normal user, confirming an IDOR vulnerability.

Security Recommendations

Enforce strict object-level authorization checks

Implement role-based access control (RBAC)

Use parameterized queries to prevent SQL injection

Limit API responses to required fields only

Validate user ownership before returning resources

## Key Learning Outcomes

Understanding of OWASP API Top 10 vulnerabilities

Hands-on experience with Postman, Burp Suite, and curl

Practical API exploitation techniques

Professional vulnerability documentation practices

## References

OWASP Juice Shop: https://owasp.org/www-project-juice-shop/

OWASP API Security Top 10: https://owasp.org/www-project-api-security/
