![Untitled (Copy)](https://github.com/shauryapuri97/shoppr/assets/23358500/f0cbaa64-2e24-481f-8e94-3052491f53b2)


This is a mock shop management system designed as a test project, it uses the Fake Store API[https://fakestoreapi.com/docs] and allows the user to view, edit, delete and create products.

Technologies: Vite, React, Redux, MaterialUI

Time taken: 4 hours

https://github.com/shauryapuri97/shoppr/assets/23358500/7eede88f-027f-43ce-afbb-9f16bdd36ad7


## How to run
Go to the project folder and run the following command.

`npm install` -> `npm run dev`

Note: Please make sure you are connected to the internet.

## Features
### View Products
The default view of the application is `Products` as it is selected on the SideNav Bar. It shows a Blotter view of all the listed products with its information in individual columns.

### Edit a product
Within the blotter for every row there is an actions columns, where the pencil icon depicts the Edit button. When the user clicks the Edit Icon, we enter a Modal (which uses React Portals) to view the information for that product. User is then able to modify the product and save it as please. Modifiable fields are Title, Description, Price & Category.

### Delete a product
Similar to Edit, we also have a Delete Icon which shows a confirmation dialog for deletion and allows the user to delete a product.

### Create a new product
Users can create a new product using the `+ New` button above the blotter, this opens a dialog with empty fields where Title, Price and Category are required for product creation. Form validation is in place for the same.

### Filter products
The blotter has a toolbar with a Filters button that allows the user to select any column in the blotter and filter the rows based on the filter value. Users can also filter the blotter using the Filter option within the menu of individual columns. 

### Navbar User Icon
Idea is to get the username at login when implemented and pass that information down as a Context to the Sidebar / other components as needed. You can see the user upon hovering on the profile icon. This is hardcoded for now.

## Design
I tried to use figma to come up with a minimal logo for the platform.

<img width="1440" alt="Screenshot 2023-10-30 at 23 17 11" src="https://github.com/shauryapuri97/shoppr/assets/23358500/92114338-4b74-4a8f-ba26-f1cc6309f38f">



## Scalability / Nice to haves
1. Allow the user to upload images for Create / Edit purposes.
2. Would get rid of inline styles moving towards production as they can hit performance quite bad, redrawing styles each render.
3. Would look into a more robust library such as AGGrid for grids to manage big datasets.
4. Add pagination on blotters for users to be able to load more rows.
5. Use a graphing library such as React Flow / Highcharts to be able to show shop / product info to users in a more intuitive way.
6. Add responsiveness to the blotter / application.
7. Add a feature for the user to be able to switch between light and dark themes.
