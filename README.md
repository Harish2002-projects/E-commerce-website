# Amazon Clone Website

This is an Amazon clone website built with HTML, CSS, and JavaScript. It includes a main page displaying products, a cart system where products can be added, a cart page, and a track order page.

## Features

- Main Page: Displays a list of products available for purchase. Click on add to cart to add the item to cart. the quantity of the item can be adjusted as per users wish

![Screenshot 2024-05-11 194601](https://github.com/Harish2002-projects/E-commerce-website/assets/123865573/621a1da0-293f-4746-806c-e81b7249a110)

  
- Cart Page: Shows the items currently in the user's cart and provides options to update or remove them. the cart page also gives the user freedom to choose the one of the 3 available delivery options. 

![Screenshot 2024-05-11 194641](https://github.com/Harish2002-projects/E-commerce-website/assets/123865573/81c8baa6-64ed-4aaf-b006-6c2b3cc05801)


- Track Order Page: Enables users to track the status of their orders.

![Screenshot 2024-05-11 194654](https://github.com/Harish2002-projects/E-commerce-website/assets/123865573/51083ca9-e9d0-473d-98b8-ccbe20f321f8)


## Usage

To use the website, simply clone the repo into local system and open the `index.html` file. You will be directed to the main page where you can browse and select products. Clicking on a product will add it to your cart. You can then navigate to the cart page to view your selected items, update quantities, or remove items. The track order page allows you to check the status of your orders.

## Technologies Used

- HTML
- CSS
- JavaScript
  
## Api Used

SuperSimpleBackend API serves as the backend infrastructure for an Amazon clone project, facilitating crucial functionalities like product retrieval and order management. By accessing the /products endpoint, users can retrieve a comprehensive list of available products. Each product entry includes essential details such as its unique identifier, name, price, and description. Additionally, the API allows users to create orders by submitting cart objects via the /orders endpoint. Upon successful submission, the API generates an order ID along with relevant timestamps and detailed product information. here are some places where this api has been used in the project:

1. To recieve a product list from the api
   
![image](https://github.com/Harish2002-projects/E-commerce-website/assets/123865573/745bc863-7020-403a-a9bd-50f694fcf6fe)

2. To create an order by passing in the current cart

![image](https://github.com/Harish2002-projects/E-commerce-website/assets/123865573/3170b29a-d418-4cd2-9b48-0d179ab5b31e)

## Api Documentation

https://supersimplebackend.dev/documentation

## Dependencies

No external dependencies are required to run this website.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please submit an issue or open a pull request.

## Credits

This project was inspired by Amazon and was created by Harish. Feel free to customize and distribute it as you like.
