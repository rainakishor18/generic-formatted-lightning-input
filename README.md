# Generic-Formatted-Lightning-Input
Generic Formatted Lightning Input
<div id="top"></div>




<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rainakishor18/generic-formatted-lightning-input">
    <img src="https://github.com/gilbarbara/logos/blob/master/logos/git-icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Generic Formatted Lightning Input</h3>

  <p align="center">
    This component is an enhanced version of lightning-input of type text which enables user to create inputs verified against defined fixed length patterns with the feature of auto – formatting on the go. 
    <br />
    <a href="https://github.com/rainakishor18/generic-formatted-lightning-input"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/rainakishor18/generic-formatted-lightning-input">View Demo</a>
    ·
    <a href="https://github.com/rainakishor18/generic-formatted-lightning-input/issues">Report Bug</a>
    ·
    <a href="https://github.com/rainakishor18/generic-formatted-lightning-input/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

You can use this component if
* You need a fixed length input
* You need to validate the input against specific pattern.
* You need to autoformat the input on the go based on the pattern.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [Lighning Web Components](https://developer.salesforce.com/docs/component-library/documentation/lwc)
* [JavaScript](https://www.javascript.com)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
The repository has the below to components - 
*formattedTextInput - Component which can be used instead of lightnin-input for text type 
*demoCmp - working sample component which can be used to test, explore and understand features of formattedTextInput.
### Prerequisites

NA


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rainakishor18/generic-formatted-lightning-input.git
   ```
2. Embed the demoCmp into a Lightning Record/Home/App page to test it out.
   

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<b>Pattern generation</b></br>
Sequence of reserved characters are used to generate patterns to match input against. Each reserved key corresponds to a regex or a specific value to define the acceptable values at its index in given pattern.

<b>Rules</b></br>
1. All reserved keys represent corresponding regex
2. Any thing other than reserved keys represent a fixed character at that index.
3. ‘/’ is used to escape reserved keys and ‘/ ‘ itself.
4. All foward slashes '/' must be escaped with forward slashes '/'.

<b>Legend</b></br>
<div style="padding-right: 39px;">
            <table class="slds-m-left--small" style="border-style:inherit;">
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top" >
                    <th  style="padding:5px; border-style:inherit; text-align: center;">Key</th>
                    <th  style="padding:5px;  border-style:inherit;text-align: center;">Reserved Key</th>
                    <th  style="padding:5px;  border-style:inherit;text-align: center;">Regex/Value validated</th>
                    <th  style="padding:5px;  border-style:inherit;text-align: center;">Acceptable Characters</th>
                    <th  style="padding:5px;  border-style:inherit;text-align: center;">Sample Character</th>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">X</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;" >Yes</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">RegExp('[A-Z]')</td>
                    <td style="padding:5px;border-style:inherit;">Upper Case Alphabets</td>
                    <td style="padding:5px;border-style:inherit; ">‘A’</td>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">x</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">Yes</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">RegExp('[a-z]')</td>
                    <td style="padding:5px;border-style:inherit;">Lower Case Alphabets</td>
                    <td style="padding:5px;border-style:inherit;border-style:inherit; ">‘a’</td>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">Y</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">Yes</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">RegExp('[A-Za-z]')</td>
                    <td style="padding:5px;border-style:inherit;">All Alphabets</td>
                    <td style="padding:5px;border-style:inherit; border-style:inherit;">‘a’ or ‘A’</td>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">Z</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">Yes</td>
                    <td style="padding:5px;text-align: center;border-style:inherit;">RegExp('[A-Za-z0-9]')</td>
                    <td style="padding:5px;border-style:inherit;">All Alphanumeric characters</td>
                    <td style="padding:5px;border-style:inherit; ">‘a’ or ‘A’ or ‘9'</td>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">U</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">Yes</td>
                    <td style="padding:5px;text-align: center;border-style:inherit;">RegExp('[A-Z0-9]')</td>
                    <td style="padding:5px;border-style:inherit;">Upper Case Alphanumeric characters</td>
                    <td style="padding:5px;border-style:inherit;border-style:inherit; ">‘A’ or ‘9’</td>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">u</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">Yes</td>
                    <td style="padding:5px;text-align: center;border-style:inherit;">RegExp('[a-z0-9]')</td>
                    <td style="padding:5px;border-style:inherit;">Lower Case Alphanumeric characters</td>
                    <td style="padding:5px;border-style:inherit; ">‘a’ or ‘9’</td>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">D</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">Yes</td>
                    <td style="padding:5px;text-align: center;border-style:inherit;">RegExp('[0-9]')</td>
                    <td style="padding:5px;border-style:inherit;">Digits only</td>
                    <td style="padding:5px;border-style:inherit; ">‘A’</td>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">Any special character</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">No</td>
                    <td style="padding:5px;text-align: center;border-style:inherit;">Special character itself</td>
                    <td style="padding:5px;border-style:inherit;">Special character itself</td>
                    <td style="padding:5px;border-style:inherit; ">Eg. If set to - , then value accepted is ‘-’ only</td>
                </tr>
                <tr class="slds-border--left slds-border--right slds-border--bottom slds-border--top">
                    <td style="padding:5px; text-align: center;border-style:inherit;padding: 5px; font-style: italic; font-weight: bold;">/</td>
                    <td style="padding:5px; text-align: center;border-style:inherit;">No</td>
                    <td style="padding:5px;text-align: center;border-style:inherit;">Escaped Character after ‘/’</td>
                    <td style="padding:5px;border-style:inherit;">Used to escaped reserved keys and ‘/’</td>
                    <td style="padding:5px;border-style:inherit; ">/D means ‘D’ is accepted. // means ‘/’ is accepted.</td>
                </tr>
            </table>
        </div>



<p align="right">(<a href="#top">back to top</a>)</p>

<b>Sample Patterns</b></br>
1. Pattern for any 2 character string ending enclosed in parenthesis
```sh
 (ZZ)
```
2. Any 4 char alphabet only string starting with ‘D’
```sh
 /DZZZZ
```
3. Any 4 digit string starting with ‘D-‘
```sh
 /D-DDDD
```
4. Any 4 digit string starting with ‘A-‘
```sh
 A-DDDD
```



<!-- ROADMAP -->
## Roadmap

- [ ] Base Package - Deployed
- [ ] Managed Package with Test Suite
- [ ] Scope for non-fixed length
- [ ] Incorporate Phone & Date Base Components


See the [open issues](https://github.com/rainakishor18/generic-formatted-lightning-input/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Raina Kishor - rainakishor18@gmail.com

Project Link: [https://github.com/rainakishor18/generic-formatted-lightning-input](https://github.com/rainakishor18/generic-formatted-lightning-input)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rainakishor18/generic-formatted-lightning-input.svg?style=for-the-badge
[contributors-url]: https://github.com/rainakishor18/generic-formatted-lightning-input/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rainakishor18/generic-formatted-lightning-input.svg?style=for-the-badge
[forks-url]: https://github.com/rainakishor18/generic-formatted-lightning-input/network/members
[stars-shield]: https://img.shields.io/github/stars/rainakishor18/generic-formatted-lightning-input.svg?style=for-the-badge
[stars-url]: https://github.com/rainakishor18/generic-formatted-lightning-input/stargazers
[issues-shield]: https://img.shields.io/github/issues/rainakishor18/generic-formatted-lightning-input.svg?style=for-the-badge
[issues-url]: https://github.com/rainakishor18/generic-formatted-lightning-input/issues
[license-shield]: https://img.shields.io/github/license/rainakishor18/generic-formatted-lightning-input.svg?style=for-the-badge
[license-url]: https://github.com/rainakishor18/generic-formatted-lightning-input/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/raina-kishor-430692114
[product-screenshot]: images/screenshot.png
