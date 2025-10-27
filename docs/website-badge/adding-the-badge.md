# Adding the badge

The badge can be added by using an `<img/>` tag on your website.

You can use this badge to show users:
* That your website uses tooling for sustainable web browsing
* That your website is compatible with the [Sustainable Browser](https://chromewebstore.google.com/detail/sustainable-browser/cdpbgdconlejjfnpifkpalpcfohmiolf) extension

JSX Example:

```jsx
<img
  src="https://utopiancontributors.com/Sustainable-Website-Button.svg"
  onClick={() =>
    window.open("https://utopiancontributors.com", "_blank")
  }
/>
```

HTML Example:
```html
<img
  src="https://utopiancontributors.com/Sustainable-Website-Button.svg"
  onClick="window.open('https://utopiancontributors.com', '_blank')"
/>
````

<img
    src="https://utopiancontributors.com/Sustainable-Website-Button.svg"
    onClick='window.open("https://utopiancontributors.com", "_blank")'
/>