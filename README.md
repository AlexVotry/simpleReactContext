This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This repo was to experiment with context and hooks.

The Flag icon experiment
  App
    UserCreate
      Button
      Field

Numbers experiment:
  App
    Red
      Blue
        Green

Flags:
  The flag icons change the text in the button.
    I passed state into a CountryContext.Provder and the button receives the information directly.  
  The Button receives two contexts so the additional context needs  <ColorContext.Consumer> to pass the button color. I wrapped the CountryContext with ColorContext in the App component.

  The Field component receives the Default Context.  I passed the value directly from the context to the component. The Parent components have no knowledge of the DefaultContext.

Numbers:
  I am passing the initialState as a value in NumbersContext.Provider from the App Component.

  The value is an object of a number and two functions.  

  I pass this object to all three components directly. (Red, Green, Blue).

  The Blue component is child to Red and parent to Green.  The function is applied to the buttons and effects both parent and child simultaneously.

I did this all with functional components.  (Most examples use class components);
