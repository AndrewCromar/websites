# Database Setup SQL

```sql
CREATE DATABASE IF NOT EXISTS wishlist
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE wishlist;

CREATE TABLE accounts (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    UNIQUE KEY uniq_email (email)
);

CREATE TABLE codes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uid INT NOT NULL,
    code VARCHAR(16) NOT NULL,
    time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_code (code),
    INDEX idx_uid (uid),
    INDEX idx_time (time),

    CONSTRAINT fk_codes_account
        FOREIGN KEY (uid) REFERENCES accounts(uid)
        ON DELETE CASCADE
);

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uid INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    link VARCHAR(512) DEFAULT NULL,
    price DECIMAL(10,2) NOT NULL,
    money_saved DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    bought BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_uid (uid),
    INDEX idx_bought (bought),

    CONSTRAINT fk_items_account
        FOREIGN KEY (uid) REFERENCES accounts(uid)
        ON DELETE CASCADE
);
```