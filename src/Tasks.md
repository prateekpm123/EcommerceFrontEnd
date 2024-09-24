### To do

1. [x] Make the sign up page talk to my User Authentication service
    1. [x] Figure out, if you need to create a controller class in between or directly a service class, which you can use to talk to the User authentication service. ( I think making a controller seems sensible ).
    2. [x] Make the controller class, make the service class and then call the api.
2. Nodes behaviour
    1. [x] Once the User Service is up and running in the backend, make the node glow.
       1. [x] Make repeated checks for the health of UserAuthenticationService.
3. [x] Finish the complete flow of UI and BE integration of the Login and sign up
4. [x] Once the user is logged in direct him to a welcome page.
5. [ ] Home page.
   1. [x] Create a Product card, to show images and other details
   2. [ ] Get List of products from the BE, then show in Home page.
      1. [ ] Make the 3d cube glow for this Service as well.
   3. [ ] Then Create a basic navbar.
      1. [ ] Home
      2. [ ] search bar
      3. [ ] Cart
      4. [ ] User details ( section )
   4. [ ] Then create a full fledge product page.
   5. [ ] Maybe work on the 3d part over here.
      1. [ ] Learn a bit of react 3 fiber.
       2. If an api call is going to the User Authentication service make an animation on the canvas like a lighting or something show that a api call was made to the User authentication.
   6. [ ] Then cart flow and order flow, including their backend.
   7. [ ] Then payment