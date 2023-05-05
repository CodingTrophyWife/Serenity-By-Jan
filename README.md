# Serenity-By-Jan

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


![1Ko3](https://user-images.githubusercontent.com/126922695/236526342-2d9808dd-ed2c-408a-82ce-b7d04a56df97.gif)



## Link to my preview

https://drive.google.com/file/d/1Q8k65LpPXlPlJcAWUMTLkeA6wlNFeoj9/view

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [ShoutOuts](#shoutouts)
- [Questions](#questions)


## Description:

User Story

AS A business owner
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
Mock-Up

## ShoutOuts:

My Hubby for humbling me. Right when I thought I could do this all on my own, my hubby comes in and changes it to make it easier to read and make so much more sense! 
Tequila for giving me the confidence to actually believe I could do this


## Installation:

1. Clone Repository
2. Run- npm i 
3. Log in to mysql- mysql -uroot -p
4. Password= password
5. In the SQL command line run- source db/schema.sql
6. In the SQL command line run- source db/seeds.sql
7. Then type- quit
8. Now to run the program type- node index.js


## Usage:

POST and PUT

{
	"category_name":"Example Category"
}

Tag
POST and PUT

{
	"tag_name":"Example Tag"
}

Product
POST and PUT

{
	"product_name": "Example Product",
	"price": Decimal Value,
	"stock": Integer Value,
	"tagIds": [Array, of, Integers]
}



## License

The MIT License


## Screen Shots:

![Screenshot 2023-05-05 101334](https://user-images.githubusercontent.com/126922695/236523304-3ccc6912-5eb6-4f63-b948-00d27ef7f73b.png)

![Screenshot 2023-05-05 101323](https://user-images.githubusercontent.com/126922695/236523287-975593b2-0068-417c-b129-8e40ddb6ac48.png)

![Screenshot 2023-05-05 101312](https://user-images.githubusercontent.com/126922695/236523279-5fb0e86e-acfe-49ab-be97-f92a8fa99a5b.png)



## Questions 
You can reach me at my GitHub or Email

https://github.com/CodingTrophyWife

cmfosmark@gmail.com
