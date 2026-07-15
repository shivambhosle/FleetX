# FleetX Database Design

Version: 1.0

---

# 1. Database Philosophy

FleetX follows a normalized relational database design.

Goals:

- Eliminate duplicate data.
- Maintain referential integrity.
- Improve scalability.
- Support future AI modules.
- Enable efficient reporting.

---

# 2. Core Entities

The platform is built around the following entities.

## Organization

Stores company information.

---

## User

Stores all platform users.

Relationship:

Organization → Users

---

## Role

Stores user roles and permissions.

Relationship:

Role → Users

---

## Customer

Stores customer information.

Relationship:

Customer → Shipments

---

## Shipment

Represents customer transportation requests.

Relationship:

Shipment → Dispatch

Shipment → Trip

---

## Dispatch

Stores operational planning.

Relationship:

Dispatch → Shipment

Dispatch → Vehicle

Dispatch → Driver

---

## Vehicle

Stores fleet assets.

Relationship:

Vehicle → Trips

Vehicle → Fuel Logs

Vehicle → Maintenance

Vehicle → Documents

---

## Driver

Stores driver information.

Relationship:

Driver → Trips

Driver → Documents

---

## Trip

Represents shipment execution.

Relationship:

Trip → Shipment

Trip → Driver

Trip → Vehicle

---

## Fuel Log

Stores fuel history.

Relationship:

Vehicle → Fuel Logs

---

## Maintenance Record

Stores maintenance history.

Relationship:

Vehicle → Maintenance Records

---

## Compliance Document

Stores all uploaded documents.

Relationship:

Vehicle / Driver → Documents

---

## Notification

Stores system notifications.

---

## Report

Stores generated reports.