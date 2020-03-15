DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (136, "toilet paper", "paper goods", 19.99, 10),
	   (254, "sanitizers", "home goods", 99.99, 5),
	   (329, "canned tuna", "canned goods", 3.99, 5),
	   (406, "navy beans", "canned goods", 2.99, 14),
	   (567, "basmati rice", "dry goods", 4.79, 19),
	   (675, "pasta", "dry goods", 1.00, 100),
	   (754, "kleenex", "paper goods", 99.99, 6),
	   (823, "amazon echo", "electronics", 49.99, 100),
	   (902, "iphones", "electronics", 999.99, 100),
	   (1010, "pens", "school", 0.99, 1000)