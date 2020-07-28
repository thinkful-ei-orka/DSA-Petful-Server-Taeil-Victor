# Petful API

Programmed by **Taeil Kwak** and **Victor Jarvis** for Thinkful's Software Engineering Immersion Program.

This was created using Javascript, Node.js, and Express.

Server Link: <https://petful-server-tv.herokuapp.com/>
Live Client Project Link: <https://github.com/thinkful-ei-orka/DSA-Petful-Client-Taeil-Victor>

## API Documentation

---

## GET Pets

Returns all pets currently up for adoption.

**URL**<br />
'/api/pets'

**Method**<br />
'GET'

**Success Response**<br />
     *Code:* 200<br />
     *Content:* Pets

---

## GET Cats

Returns all cats currently up for adoption.

**URL**<br />
'/api/cats/all'

**Method**<br />
'GET'

**Success Response**<br />
     *Code:* 200<br />
     *Content:* Cats

**Error Response** <br />
     *Code:* 404
     *Content:* 'No cats found.' <br />

---

## GET Dogs

Returns all dogs currently up for adoption.

**URL**<br />
'/api/dogs/all'

**Method**<br />
'GET'

**Success Response**<br />
     *Code:* 200<br />
     *Content:* Dogs

**Error Response** <br />
     *Code:* 404
     *Content:* 'No dogs found.' <br />

---

## GET People

Returns all the people currently in the queue.

**URL**<br />
'/api/people'

**Method**<br />
'GET'

**Success Response**<br />
     *Code:* 200<br />
     *Content:* People

**Error Response** <br />
     *Code:* 404
     *Content:* 'No users found.' <br />

---

## POST Cats

**URL**<br />
'/api/cats'

**Method**<br />
'POST'

**Data Params (Required)**<br />
Age, Breed, Description, Gender, Image URL, Name, Story

**Success Response**<br />
     *Code:* 201<br />
     *Content:* { age, breed, description, gender, imageURL, name, story }

---

## POST Dogs

**URL**<br />
'/api/dogs'

**Method**<br />
'POST'

**Data Params (Required)**<br />
Age, Breed, Description, Gender, Image URL, Name, Story

**Success Response**<br />
     *Code:* 201<br />
     *Content:* { age, breed, description, gender, imageURL, name, story }

---

## POST User

Posts the users name to the line to adopt.

**URL**<br />
'/api/people'

**Method**<br />
'POST'

**Data Params (Required)**<br />
     User name

**Success Response**<br />
     *Code:* 201<br />
     *Content:* User name

**Error Response** <br />
     *Content:* 'errorMessage: 'Please enter a name.' <br />

---

## GET Adopted

Returns all of the previously adopted pets.

**URL**<br />
'/api/adopted'

**Method**<br />
'GET'

**Success Response**<br />
     *Code:* 200<br />
     *Content:* adopted
