**Ganasoft API**
----
podrian haber puesto el API en tablas, mas legible para la documentacion
##Programs

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/programs  | Get all the programs  |
| POST | /api/programs  | Post a program  |
| GET | /api/programs/:program_id | Get specific program by id  |
| DELETE | /api/programs/:program_id | Delete specific program by id  |


* **URL**

  /users

* **Method:**

  `GET` 
  
*  **URL Params**

   **Required:**
 
   None.

   **Optional:**
 
   `email=[alphanumeric]`

* **Data Params**

  None
  
-----------------------------       


* **URL**

  /farms

* **Method:**

  `GET` 
  
*  **URL Params**

   **Required:**
 
   None.

   **Optional:**
 
   `owner=[alphanumeric]`

* **Data Params**

  None
  
  -----------------------------       


* **URL**

  /farms

* **Method:**

  `POST` 
  
*  **URL Params**

   **Required:**
 
   None.

   **Optional:**
 
   None.

* **Data Params**

  `owner=[alphanumeric]`
  `name=[alphanumeric]`
  `size=[numeric]`
  
  
  -----------------------------       


* **URL**

  /farms

* **Method:**

  `DELETE` 
  
*  **URL Params**

   **Required:**
 
   `owner=[alphanumeric]`
   `farm=[alphanumeric]`

   **Optional:**
 
   None

* **Data Params**

  None
  
    -----------------------------       


* **URL**

  /animals

* **Method:**

  `GET` 
  
*  **URL Params**

   **Required:**
 None

   **Optional:**
 
   `farm=[alphanumeric]`

* **Data Params**

  None
  
    -----------------------------       


* **URL**

  /animals

* **Method:**

  `POST` 
  
*  **URL Params**

   **Required:**
  None.

   **Optional:**
 
   None

* **Data Params**

   `farm=[alphanumeric]`
   `number=[numeric]`
    `especie=[alphanumeric]`
   `raza=[alphanumeric]`
    `sexo=[alphanumeric]`
   `foto=[alphanumeric]`
    `descripcion=[alphanumeric]`

  
    -----------------------------       


* **URL**

  /animals

* **Method:**

  `DELETE` 
  
*  **URL Params**

   **Required:**
 
   `farm=[alphanumeric]`
   `animal=[alphanumeric]`

   **Optional:**
 
   None

* **Data Params**

  None
