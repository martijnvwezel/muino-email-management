
# create database
``` mysql
CREATE DATABASE mailserver;
```

# users
The the following variables in the SQL commands:
>    ChangeMe1=1j5hl1ji3255132hj5312lk    
>    ChangeMe2=a0df98v089y44g31un413tj

### mailuser that gets access to that database:
``` mysql
CREATE USER 'mailuser'@'127.0.0.1' IDENTIFIED BY 'ChangeMe1';
```

### user to allow you to manage the database:
``` mysql
CREATE USER 'mailadmin'@'localhost' IDENTIFIED BY 'ChangeMe2';
```

### The admin needs read and write access to the database:
``` mysql
GRANT ALL ON mailserver.* TO 'mailadmin'@'localhost';
```

### The other account just needs read permissions:
``` mysql
GRANT SELECt ON mailserver.* TO 'mailuser'@'127.0.0.1';
```

# Create tables
### virtual_domains
``` mysql
USE mailserver;
CREATE TABLE IF NOT EXISTS `virtual_domains` (
    `id` int(11) NOT NULL auto_increment,
    `name` varchar(50) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```


### virtual_users
``` mysql
CREATE TABLE IF NOT EXISTS `virtual_users` (
    `id` int(11) NOT NULL auto_increment,
    `domain_id` int(11) NOT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(150) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`),
    FOREIGN KEY (domain_id) REFERENCES virtual_domains(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### virtual_aliases
``` mysql
CREATE TABLE IF NOT EXISTS `virtual_aliases` (
    `id` int(11) NOT NULL auto_increment,
    `domain_id` int(11) NOT NULL,
    `source` varchar(100) NOT NULL,
    `destination` varchar(100) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (domain_id) REFERENCES virtual_domains(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```




# users, databases, aliases

## Domain commands
### Create a mail domain
``` mysql
INSERT INTO virtual_domains (name) VALUES ("example.org");
```
### Delete a mail domain
``` mysql
DELETE FROM virtual_domains where name='example.org';
```
## User commands
### Create a mail user
``` mysql
INSERT INTO virtual_users (domain_id, email, password) VALUES ( (SELECT id FROM virtual_domains WHERE name='example.org'), 'john@example.org',CONCAT('{SHA256-CRYPT}', ENCRYPT ('new password', CONCAT('$5$', SUBSTRING(SHA(RAND()), -16)))));
```
### Change the password of a user
``` mysql
UPDATE virtual_users SET password=CONCAT('{SHA256-CRYPT}', ENCRYPT ('new password', CONCAT('$5$', SUBSTRING(SHA(RAND()), -16)))) WHERE email='email@address';
```
### Delete a mail user
``` mysql
DELETE FROM virtual_users WHERE email='john@example.org';
```
## aliases command
### Create a mail forwarding
``` mysql
INSERT INTO virtual_aliases (domain_id, source, destination) VALUES ( (SELECT id FROM virtual_domains WHERE name='example.org'), 'melissa@example.org', 'juila@example.net');
```
### Delete a mail forwarding
``` mysql
DELETE FROM virtual_aliases WHERE source='melissa@example.org';
```



# example commands
``` mysql
REPLACE INTO mailserver.virtual_users (id,domain_id,password,email) VALUES ('1', '1', '{SHA256-CRYPT}blajaljobajbijivwedrEFFEFEF', 'john@example.org');

REPLACE INTO mailserver.virtual_domains (id,name) VALUES ('1','example.org');

REPLACE INTO mailserver.virtual_aliases (id,domain_id,source,destination) VALUES ('1', '1', 'jack@example.org', 'john@example.org');

DELETE FROM mailserver.virtual_domains WHERE name='example.org';
```






