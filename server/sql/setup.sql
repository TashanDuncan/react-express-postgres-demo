DROP TABLE IF EXISTS demo.stock;
DROP TABLE IF EXISTS demo.order;
DROP TABLE IF EXISTS demo.order_items;

CREATE TABLE demo.stock (
    stock_id VARCHAR(255) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE demo.order (
    order_id VARCHAR(255) NOT NULL PRIMARY KEY,
    created_date TIMESTAMP NOT NULL
);

CREATE TABLE demo.order_items (
    order_id VARCHAR(255) NOT NULL,
    stock_id VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (order_id, stock_id)
);

INSERT INTO demo.stock (stock_id, name, description) VALUES ('001', 'WIDGET ONE', 'Square widget');
INSERT INTO demo.stock (stock_id, name, description) VALUES ('002', 'WIDGET TWO', 'Round widget');

INSERT INTO demo.order (order_id, created_date) VALUES ('001',  now());

INSERT INTO demo.order_items (order_id, stock_id, quantity) VALUES ('001', '001', 2);
INSERT INTO demo.order_items (order_id, stock_id, quantity) VALUES ('001', '002', 10);



