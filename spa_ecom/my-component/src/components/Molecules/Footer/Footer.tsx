import { Component, h } from '@stencil/core';
@Component({
  tag: 'my-footer',
  styleUrl: 'Footer.css',
  shadow: true,
})
export class customFooter {
  render() {
    return (
      <div class="footer-border">
        <div class="footer-content">
          <div>
            <div class="footer-pic">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-QE0Gj4g7Fhr51fdFekgrxUwmsrxItjYHg&usqp=CAU" 
              alt="zensar" class="footer-icon" />
            </div>
            <p class="pic-text">
                ShopCart brings you the joy of discovery with a huge selection of original products from mobiles, fashion,home appliances, groceries, ...
            </p>
          </div>
          <div class=" Footer-Heading">
            <h2 class="Footer-Info">Contact Info</h2>
            <div>
              <ul class="Footer-details">
                <li class="flex items-center"> please call us at 514-286-9228 or </li>
                <li class="flex items-center">at 1-800-663-9228</li>
              </ul>
            </div>
          </div>

          <div class=" Footer-Heading">
            <h2 class="Footer-Info">About US</h2>
            <div>
              <ul class="Footer-details">
                <p>
                  The first thing to keep in mind is that your About Us page is not just about you – it's about what you can do for potential customers, and why you should be the
                  one to do it. Therefore, you'll want to make sure you provide some background on both your products and your team.
                </p>
                {/* <li class='flex items-center'><ChevronRightIcon class='footer' />Online Fees Payment</li> */}
                {/* <li class='flex items-center'><ChevronRightIcon class='footer' />Sports</li> */}
              </ul>
            </div>
          </div>

          <div class=" Footer-Heading">
            <h2 class="Footer-Info">Services</h2>
            <div>
              <ul class="Footer-details">
                <li class="flex items-center">RPG Group of Engineering</li>
                <li class="flex items-center">RPG Group of Engineering</li>
                <li class="flex items-center">RPG Group of Engineering</li>
                <li class="flex items-center">RPG Group of Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
