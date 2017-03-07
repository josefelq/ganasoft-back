**Ganasoft API**
----
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
    (optional)`padre=[alphanumeric]` 
    (optional)`madre=[alphanumeric]` 
    `fecha_nacimiento=[alphanumeric]`

  
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
