# Vulnerability: Excessive Data Exposure

## Application
OWASP Juice Shop (Local)

## API Endpoint
GET /api/Products

## Vulnerability Type
Excessive Data Exposure

## Severity
Medium

## Description
The Products API returns more information than required for a normal user. The response includes internal fields and metadata that should not be exposed, increasing the attack surface.

## Steps to Reproduce
1. Authenticate as a normal user and obtain a valid Bearer token
2. Send a GET request to `/api/Products`
3. Observe that the response contains multiple unnecessary internal fields

## Impact
An attacker can gain insight into the application’s internal structure, product metadata, and potentially sensitive implementation details, which can aid further attacks.

## Evidence
- Screenshot: `products_excessive_data.png`

## Recommendation
- Limit API responses to only required fields
- Use response filtering and DTOs
- Avoid exposing internal identifiers and metadata
