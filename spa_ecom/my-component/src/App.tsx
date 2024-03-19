import { Component, h } from "@stencil/core";
@Component({
    tag: 'my-app',
    // styleUrl: 'App.css', // Add the appropriate style file if needed
    shadow: true,
  })
  export class MyApp {
    render() {
      return (
        <stencil-router>
          <stencil-route-switch>
            <stencil-route url="/" component={<my-homepage></my-homepage>} />
            <stencil-route url="/details" component={<my-details></my-details>} />
            {/* <stencil-route url="/whatsnew" component="my-whatsnew" /> */}
            <stencil-route url="/delivery" component={<my-delivery></my-delivery>} />
            <stencil-route url="/categories" component={<my-categories></my-categories>} />
            {/* Redirect to home if no matching route */}
            {/* <stencil-route component="my-home-page" /> */}
          </stencil-route-switch>
        </stencil-router>
      );
    }
  }