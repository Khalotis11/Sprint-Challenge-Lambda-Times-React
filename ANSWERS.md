1 -  What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to check the type of data being passed your app as props.

It's important to check the type of data going through your app because it can help you catch errors now and in the future. When there is an error because the data going through your app isn't what you listed in the PropTypes you know you need to figure out why the data is coming in in that format, if you need to change it, or if you need to change your app to accept that type of data.

2 - Describe a life-cycle event in React?

Life-cyle events in React are part of React.Component. They are functions built into React to give React it's functionality.

An example is componentDidMount() which runs when a component is mounted to the DOM.

3 - Explain the details of a Higher Order Component?

A higher order component can take in other components. They are commonly used for conditional rendering. An example would be a component that displayed a login screen if you hadn't logged in but the regular content if you had.

At it's core a HOC takes in one or more components and outputs a component.

4 - What are three different ways to style components in React? Explain some of the benefits of each.

Reactstrap -
    Pros -
        Easy to use
        Ready made styles
        Components look good together out of box
        Makes creating a put together app a lot faster
    Cons -
        While you can customize components, options for customizing are limited
        Lots of sites use these same components so you lose out on a unique look

CSS/LESS/SASS -
    Pros -
        Highly customizable, can basically do whatever you want
        Most people already know CSS before learning React so it's easy to use and read

    Cons -
        Can get a little messy with all of the class names.

Styled-components -
    Pros -
        Just as customizable as CSS
        Easy to re-use styles
        Can pass in props to your components making it easier to reuse styles by adding conditionals to your styled components
        Easy to read

    Cons -
        Specificity can get tricky
        May be hard to read for people used to CSS