import { Injectable } from '@angular/core';
import { Product } from '../models/Product';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /*
  private productArray: Product[] = [
    {id: 1, name: 'Samsung Galaxy Fold', price: 2000, details: "The Galaxy Fold contains two displays, its front cover contains a small, 4.6-inch display in the center designed for one-handed use, and the device can fold open to expose a 7.3-inch display. Samsung rated the fold mechanism as supporting up to 200,000 uses. The tablet screen contains a large notch in the top-right corner, and is coated with a custom multi-layer laminate in lieu of glass. Its power button contains a fingerprint reader. Samsung did not state which system-on-chip it uses in the Galaxy Fold, beyond that it is a \"state-of-the-art\" CPU with a 7 nanometer production process, contains 12 GB of RAM, and has 512 GB of non-expandable storage. Teardowns later revealed that it was the Qualcomm Snapdragon 855, which is used in all regions (unlike other Samsung phones that have been split between Snapdragon and Samsung's in-house Exynos chips depending on the market).The Galaxy Fold will be sold with a 5G variant.", imageUrl: '../assets/img/SamsungGalaxyFold.jpg'},
    {id: 2,name: 'iPhone XS', price: 999, details: 'The XS has a design visually near-identical to the X but includes upgraded hardware, featuring the A12 Bionic chip built with a 7 nanometer process. It also features a 5.85-inch (149 mm) OLED display and contains dual 12-megapixel rear cameras and one 7-megapixel front-facing camera. The XS Max features the same hardware and cameras, but has a larger 6.46-inch (164 mm) OLED display and battery (3,174mAh). It was also noted by the media that the XS received a smaller battery than that of the X (dropping to 2,658 mAh from 2,716 mAh). The XS battery is a new single-cell L-shaped battery, while the iPhone XS Max battery remains two cells like the iPhone X.', imageUrl: '../assets/img/iphonexs.png'},
    {id: 3,name: 'OnePlus6t', price: 555, details: 'The OnePlus 6T comes with a 6.41-inch AMOLED FHD+ display, a Snapdragon 845 processor, and a 3700 mAh battery (larger than its predecessor). It has a 16-megapixel and a 20-megapixel camera on the back, and another 16-megapixel one in the front. This device comes with different variations of storage (128 GB, 256GB) and RAM. For biometrics, the OnePlus 6T has an in-display fingerprint sensor, in addition to Face Unlock. It ships with OnePlus customized version of Android, OxygenOS, which is based on Android Pie. The OnePlus 6T supports 4G, LTE, Dual VoLTE, 3G, 2G and CDMA.', imageUrl: '../assets/img/oneplus6t.jpg'},
    {id: 4,name: 'Google Pixel 3', price: 799, details: 'The Pixel 3 and Pixel 3 XL come in three colors: "Just Black", "Clearly White", and "Not Pink". The Pixel 3 bezels are reduced greatly from the Pixel 2, which was criticized for its large bezels. However, the Pixel 3 XL has a large notch on its display. The notch can be blacked out in developer options. Pixel 3 and Pixel 3 XL ship with Android 9.0 "Pie" at launch. Both phones will get three years of software updates and security updates guaranteed by Google. The Pixel 3 lacks the voice-unlock feature available on previous Pixel devices.', imageUrl: '../assets/img/googlePixel3.jpg'},
    {id: 5,name: 'Samsung Galaxy S10', price: 899, details: 'The S10 range ships with Android 9.0 "Pie". They are the first Samsung smartphones to ship with a major revamp of Samsungs\'s Android user experience known as One UI. A main design element of One UI is intentional repositioning of key user interface elements in stock apps to improve usability on large screens. Many apps include large headers that push the beginning of content towards the center of the display, while navigation controls and other prompts are often displayed near the bottom of the display instead.', imageUrl: '../assets/img/SamsungGalaxyS10.png'},
  ];
  */
  
  constructor() { }
  /*
  getProducts(): Product[] {
   // return this.productArray;
  }
  */
}
